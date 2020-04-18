import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

import { Entry } from '../types/Entry';

export default function DataTableRow({ row, activeProps, setDetailsOpen, headCell }: { row: Entry, activeProps: string[], setDetailsOpen: Function, headCell: any }) {
  return (
    <TableRow
      hover
      tabIndex={-1}
      key={row.country}
      onClick={() => setDetailsOpen(row)}
    >
      {headCell(row)}
      {activeProps.map(prop => (
        <TableCell key={prop} align="right">{(row as any)[prop]}</TableCell>
      ))}
    </TableRow>
  );
}
