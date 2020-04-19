import React, { useState, useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles, Theme } from '@material-ui/core/styles';

import DataTable from './DataTable';
import { Entry, getEntryProperties } from '../types/Entry';
import { TableHeadCell } from '../types/TableHeadCell';

const useStyles = makeStyles((theme: Theme) => ({
  worldPage: {
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
      <div className={classes.tableHolder}>
        <DataTable
          idKey="country"
          rows={entries}
          headCells={headCells}
          allProps={allProps}
          search={search}
          headCell={headCell}
        />
      </div>
    </div>
  );
}
