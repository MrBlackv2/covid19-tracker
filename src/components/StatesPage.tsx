import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { CurrStateData, getCurrStateProps } from '../types/CurrStateData';
import DataTable from './DataTable';
import { TableHeadCell } from '../types/TableHeadCell';

const useStyles = makeStyles((theme: Theme) => ({
  statesPage: {
    padding: theme.spacing(2)
  },
  paper: {
    height: '100%',
    width: '100%'
  },
}));

const allProps = getCurrStateProps();

const headCells: TableHeadCell[] = [{ id: 'state', label: 'State', numeric: false }]
  .concat(allProps.map(prop => ({ id: prop.id, label: prop.name, numeric: true })));

function search(entries: CurrStateData[], searchTerm: string) {
  return entries.filter(entry => entry.state.toLowerCase().includes(searchTerm.toLowerCase()))
}

const headCell = (row: CurrStateData) => (
  <TableCell align="left" style={{ display: "flex", alignItems: "center" }}>
    {row.state}
  </TableCell>
);

export default function StatesPage() {
  const [data, setData] = useState<CurrStateData[]>([]);
  const classes = useStyles();

  const loadEntries = () => {
    fetch('https://covidtracking.com/api/v1/states/current.json')
      .then(res => res.json())
      .then(entries => setData(entries))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    loadEntries();
    setInterval(() => {
      loadEntries();
    }, 60000);
  }, []);

  return (
    <div className={classes.statesPage}>
      <Paper className={classes.paper}>
        <DataTable idKey="state" rows={data} headCells={headCells} allProps={allProps} search={search} headCell={headCell} />
      </Paper>
    </div>
  );
}
