import React, { useState, useEffect } from 'react';
import { TableCell, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import DataTable from './DataTable';
import { Entry, getEntryProperties } from '../types/Entry';
import { TableHeadCell } from '../types/TableHeadCell';

const useStyles = makeStyles((theme: Theme) => ({
  worldPage: {
    padding: theme.spacing(2)
  },
  paper: {
    height: '100%',
    width: '100%'
  },
}));

const allProps = getEntryProperties();

const headCells: TableHeadCell[] = [{ id: 'country', label: 'Country', numeric: false }]
  .concat(allProps.map(prop => ({ id: prop.id, label: prop.name, numeric: true })));

function search(entries: Entry[], searchTerm: string) {
  return entries.filter(entry => entry.country.toLowerCase().includes(searchTerm.toLowerCase()))
}

const headCell = (row: Entry) => (
  <TableCell align="left" style={{ display: "flex", alignItems: "center" }}>
    <img
      style={{ height: 20, marginRight: 10 }}
      src={row.countryInfo.flag}
      alt={row.country}
    />
    {row.country}
  </TableCell>
);

export default function WorldPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const classes = useStyles();

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

  return (
    <div className={classes.worldPage}>
      <Paper className={classes.paper}>
        <DataTable
          idKey="country"
          rows={entries}
          headCells={headCells}
          allProps={allProps}
          search={search}
          headCell={headCell}
        />
      </Paper>
    </div>
  );
}
