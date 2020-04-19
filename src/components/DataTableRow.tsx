import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { WorldData } from '../types/WorldData';

export default function DataTableRow({ row, activeProps, setDetailsOpen, headCell }: { row: WorldData, activeProps: string[], setDetailsOpen: Function, headCell: any }) {
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
