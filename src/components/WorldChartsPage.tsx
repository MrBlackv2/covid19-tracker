import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import {
  BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { connect } from 'react-redux';

import { WorldData, getWorldDataProps } from '../types/WorldData';
import { loadWorldData } from '../redux/actions';
import Detail from './Detail';

interface WorldChartsPageProps {
  data: WorldData[];
  loadWorldData: Function;
}

const allProps = getWorldDataProps();

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

function WorldChartsPage({ data, loadWorldData }: WorldChartsPageProps) {
  const classes  = useStyles();
  const [detailsOpen, setDetailsOpen] = useState<WorldData | null>(null);
  const [selectedProp, setSelectedProp] = useState(allProps[0].id);
  const [showEntries, setShowEntries] = useState(10);

  const propObj = allProps.find(prop => prop.id === selectedProp);
  const propName = propObj ? propObj.name : selectedProp;

  useEffect(() => {
    function loadData() {
      fetch('https://corona.lmao.ninja/v2/countries?sort=cases')
        .then(res => res.json())
        .then(entries => loadWorldData(entries))
        .catch(err => console.error(err));
    }

    loadData();
  }, [loadWorldData]);

  const sortedEntries = data
    .slice()
    .sort((a: any, b: any) => a[selectedProp] < b[selectedProp] ? 1 : a[selectedProp] > b[selectedProp] ? -1 : 0)
    .filter((val, idx) => {
      if (showEntries > 0) {
        return idx < showEntries;
      } else {
        return idx >= data.length + showEntries;
      }
    });

  return (
    <Paper className={classes.paper}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel>Metric</InputLabel>
          <Select value={selectedProp} onChange={(ev: any) => setSelectedProp(ev.target.value)}>
            {allProps.map((prop) => (
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
              right:20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip labelStyle={{ color: "black" }} formatter={(val, x, y) => [y.value, propName]} />
            <Bar
              dataKey={selectedProp}
              fill="#8884d8"
              onClick={(entry) => setDetailsOpen(entry)}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Modal open={detailsOpen !== null} onClose={() => setDetailsOpen(null)}>
        <div>
          <Detail data={detailsOpen as WorldData} allProps={allProps} idKey="country" closeModal={() => setDetailsOpen(null)} />
        </div>
      </Modal>
    </Paper>
  );
}

const mapStateToProps = (state: any) => ({
  data: state.world.data
});

export default connect(mapStateToProps, { loadWorldData })(WorldChartsPage);
