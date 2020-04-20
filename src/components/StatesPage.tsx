import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { CurrStateData, getCurrStateProps } from '../types/CurrStateData';
import DataTable from './DataTable';
import { TableHeadCell } from '../types/TableHeadCell';

const useStyles = makeStyles((theme: Theme) => ({
  statesPage: {
    padding: theme.spacing(1),
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  tableHolder: {
    height: '100%',
    width: '100%',
    position: 'relative'
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
  }, []);

  return (
    <div className={classes.statesPage}>
      <div className={classes.tableHolder}>
        <DataTable idKey="state" rows={data} headCells={headCells} allProps={allProps} search={search} headCell={headCell} />
      </div>
    </div>
  );
}
