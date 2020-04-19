import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

import { HistStateData, getHistStateProps } from '../types/HistStateData';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    right: theme.spacing(1),
    bottom: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  chart: {
    flex: '1 1 auto',
    padding: 10
  }
}));

const allProps = getHistStateProps();

function parseDates(data: any[]) {
  return data.map(item => {
    const dateStr: string = item.date.toString();
    const year = dateStr.substr(0, 4);
    const month = dateStr.substr(4, 2);
    const day = dateStr.substr(6, 2);
    return { ...item, date: new Date(+year, (+month) - 1, +day) };
  });
}

export default function StateChartsPage() {
  const classes = useStyles();
  const [selectedState, setSelectedState] = useState('');
  const [selectedProp, setSelectedProp] = useState('positive');
  const [data, setData] = useState<HistStateData[]>([]);

  const stateSet = data.reduce((allStates, item) => {
    allStates.add(item.state);
    return allStates;
  }, new Set<string>());

  const allStates = Array.from(stateSet);

  const loadEntries = () => {
    fetch('https://covidtracking.com/api/v1/states/daily.json')
      .then(res => res.json())
      .then(entries => parseDates(entries))
      .then(entries => {
        setData(entries);
        setSelectedState(entries[0].state);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    loadEntries();
  }, []);

  const filteredData = data
    .slice()
    .filter(item => item.state === selectedState)
    .sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
    .map(item => ({ ...item, date: (item.date as Date).toLocaleDateString() }));

  return (
    <Paper className={classes.paper}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select value={selectedState} onChange={(ev: any) => setSelectedState(ev.target.value)}>
            {allStates.map((state: string) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Metric</InputLabel>
          <Select value={selectedProp} onChange={(ev: any) => setSelectedProp(ev.target.value)}>
            {allProps.map(prop => (
              <MenuItem value={prop.id} key={prop.id}>
                {prop.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={classes.chart}>
        <ResponsiveContainer>
          <LineChart
            data={filteredData}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip labelStyle={{ color: "black" }} />
            <Line type="monotone" dataKey={selectedProp} stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}
