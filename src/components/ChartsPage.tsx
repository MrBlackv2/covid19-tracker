import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

import { Entry, getEntryProperties } from '../types/Entry';
import { Paper, makeStyles, FormControl, InputLabel, Select, MenuItem, Modal } from '@material-ui/core';
import CountryDetail from './CountryDetail';

const properties = getEntryProperties();

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  chartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  chart: {
    flex: '1 1 auto',
    padding: 10
  }
}));

export default function ChartsPage() {
  const classes  = useStyles();
  const [detailsOpen, setDetailsOpen] = useState<Entry | null>(null);
  const [property, setProperty] = useState(properties[0].id);
  const [showEntries, setShowEntries] = useState(10);
  const [entries, setEntries] = useState<Entry[]>([]);

  const loadEntries = () => {
    fetch('https://corona.lmao.ninja/v2/countries?sort=cases')
      .then(res => res.json())
      .then(entries => setEntries(entries))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    loadEntries();
    setInterval(() => {
      loadEntries();
    }, 60000);
  }, []);

  const sortedEntries = entries
    .slice()
    .sort((a: any, b: any) => a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0)
    .filter((val, idx) => {
      if (showEntries > 0) {
        return idx < showEntries;
      } else {
        return idx >= entries.length + showEntries;
      }
    });

  return (
    <Paper className={classes.chartContainer}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel>Metric</InputLabel>
          <Select value={property} onChange={(ev: any) => setProperty(ev.target.value)}>
            {properties.map((prop) => (
              <MenuItem value={prop.id} key={prop.id}>
                {prop.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>View</InputLabel>
          <Select value={showEntries} onChange={(ev: any) => setShowEntries(ev.target.value)}>
            <MenuItem value={10}>Top 10</MenuItem>
            <MenuItem value={20}>Top 25</MenuItem>
            <MenuItem value={50}>Top 50</MenuItem>
            <MenuItem value={-10}>Bottom 10</MenuItem>
            <MenuItem value={-25}>Bottom 25</MenuItem>
            <MenuItem value={-50}>Bottom 50</MenuItem>
            <MenuItem value={1000}>All</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={classes.chart}>
        <ResponsiveContainer>
          <BarChart
            data={sortedEntries}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip labelStyle={{ color: "black" }} />
            <Bar
              dataKey={property}
              fill="#8884d8"
              onClick={(entry) => setDetailsOpen(entry)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Modal open={detailsOpen !== null} onClose={() => setDetailsOpen(null)}>
        <div>
          <CountryDetail entry={detailsOpen as Entry} />
        </div>
      </Modal>
    </Paper>
  );
}
