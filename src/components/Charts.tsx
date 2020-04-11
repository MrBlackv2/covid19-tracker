import React, { useState } from 'react';
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

import { Entry } from '../types/Entry';
import { Paper, makeStyles, FormControl, InputLabel, Select, MenuItem, Modal } from '@material-ui/core';
import CountryDetail from './CountryDetail';

const properties = [
  { id: "cases", name: "Cases" },
  { id: "todayCases", name: "Cases (Today)" },
  { id: "deaths", name: "Deaths" },
  { id: "todayDeaths", name: "Deaths (Today)" },
  { id: "recovered", name: "Recovered" },
  { id: "active", name: "Active" },
  { id: "critical", name: "Critical" },
  { id: "casesPerOneMillion", name: "Cases per Million" },
  { id: "deathsPerOneMillion", name: "Deaths per Million" },
  { id: "tests", name: "Tests" },
  { id: "testsPerOneMillion", name: "Tests per Million" }
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Charts({ entries }: { entries: Entry[]}) {
  const classes  = useStyles();
  const [detailsOpen, setDetailsOpen] = useState<Entry | null>(null);
  const [property, setProperty] = useState(properties[0].id);

  const sortedEntries = entries
    .slice()
    .sort((a: any, b: any) => a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0)
    .filter((val, idx) => idx < 10);

  const handleChange = (event: any) => {
    setProperty(event.target.value);
  };

  const handleClose = () => {
    setDetailsOpen(null);
  };

  return (
    <Paper>
      <FormControl className={classes.formControl}>
        <InputLabel>Metric</InputLabel>
        <Select value={property} onChange={handleChange}>
          {properties.map((prop) => (
            <MenuItem value={prop.id} key={prop.id}>
              {prop.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ResponsiveContainer height={1000}>
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
          <Tooltip />
          <Bar dataKey={property} fill="#8884d8" onClick={entry => setDetailsOpen(entry)} />
        </BarChart>
      </ResponsiveContainer>
      <Modal open={detailsOpen !== null} onClose={handleClose}>
        <div>
          <CountryDetail entry={detailsOpen as Entry} />
        </div>
      </Modal>
    </Paper>
  );
}
