import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

const headCells = [
  { id: "country", numeric: false, label: "Country" },
  { id: "cases", numeric: true, label: "Cases" },
  { id: "todayCases", numeric: true, label: "Cases (Today)" },
  { id: "deaths", numeric: true, label: "Deaths" },
  { id: "todayDeaths", numeric: true, label: "Deaths (Today)" },
];

export default function DataTableHead({ classes, order, orderBy, onRequestSort, rowCount }: { classes: any, order: 'asc' | 'desc', orderBy: string, onRequestSort: Function, rowCount: number }) {
  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding="default"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
