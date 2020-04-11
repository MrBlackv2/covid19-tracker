import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

import { Entry } from '../types/Entry';

export default function DataTableRow({ entry, activeProps, setDetailsOpen }: { entry: Entry, activeProps: string[], setDetailsOpen: Function }) {
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={entry.country}
      onClick={() => setDetailsOpen(entry)}
    >
      <TableCell align="left" style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ height: 20, marginRight: 10 }}
          src={entry.countryInfo.flag}
          alt={entry.country}
        />
        {entry.country}
      </TableCell>
      {activeProps.map(prop => (
        <TableCell key={prop} align="right">{(entry as any)[prop]}</TableCell>
      ))}
    </TableRow>
  );
}
