import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { connect } from 'react-redux';

import { HistStateData, getHistStateProps } from '../types/HistStateData';
import { loadStates, loadHistStateData, setSelectedHistState, setSelectedHistProp } from '../redux/actions';
import { StateInfo } from '../types/StateInfo';

interface StateChartsPageProps {
  states: StateInfo[];
  loadStates: Function;
  data: HistStateData[];
  loadHistStateData: Function;
  selectedState: string;
  setSelectedState: Function;
  selectedProp: string;
  setSelectedProp: Function;
}

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
    padding: 10,
    position: 'relative',
    height: '100%',
    width: '100%'
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

function StateChartsPage({
  states,
  loadStates,
  data,
  loadHistStateData,
  selectedState,
  setSelectedState,
  selectedProp,
  setSelectedProp
}: StateChartsPageProps) {
  const classes = useStyles();

  const propObj = allProps.find(prop => prop.id === selectedProp);
  const propName = propObj ? propObj.name : selectedProp;

  useEffect(() => {
    function loadData() {
      fetch(`https://covidtracking.com/api/v1/states/info.json`)
        .then(res => res.json())
        .then(items => loadStates(items.map((item: any) => ({ state: item.state, name: item.name }))))
        .catch(err => console.error(err));
    }

    if (states.length === 0) {
      loadData();
    }
  }, [states, loadStates]);

  useEffect(() => {
    function loadData() {
      let url = 'https://covidtracking.com/api/v1/';
      url += selectedState === 'US' ? 'us/daily.json' : `states/${selectedState}/daily.json`;
      fetch(url)
        .then(res => res.json())
        .then(entries => parseDates(entries))
        .then(entries => loadHistStateData(entries))
        .catch(err => console.error(err));
    }

    loadData();
  }, [selectedState, loadHistStateData]);

  const filteredData = data
    .slice()
    .sort((a, b) => a.date < b.date ? -1 : a.date > b.date ? 1 : 0)
    .map(item => ({ ...item, date: (item.date as Date).toLocaleDateString() }));

  return (
    <Paper className={classes.paper}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel>State</InputLabel>
          <Select value={selectedState} onChange={(ev: any) => setSelectedState(ev.target.value)}>
            {states.map((item: StateInfo) => (
              <MenuItem value={item.state} key={item.state}>
                {item.name}
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
            <Tooltip labelStyle={{ color: "black" }} formatter={(val, x, y) => [y.value, propName]} />
            <Line type="monotone" dataKey={selectedProp} stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}

const mapStateToProps = (state: any) => ({
  states: state.histState.states,
  data: state.histState.data,
  selectedState: state.histState.selectedState,
  selectedProp: state.histState.selectedProp
});

export default connect(mapStateToProps, {
  loadStates,
  loadHistStateData,
  setSelectedState: setSelectedHistState,
  setSelectedProp: setSelectedHistProp
})(StateChartsPage);
