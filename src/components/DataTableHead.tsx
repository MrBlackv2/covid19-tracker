import React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

const headCells: { id: string; numeric: boolean; label: string }[] = [
  { id: "country", numeric: false, label: "Country" },
  { id: "cases", numeric: true, label: "Cases" },
  { id: "todayCases", numeric: true, label: "Cases (Today)" },
  { id: "casesPerOneMillion", numeric: true, label: "Cases per Million" },
  { id: "deaths", numeric: true, label: "Deaths" },
  { id: "todayDeaths", numeric: true, label: "Deaths (Today)" },
  { id: "deathsPerOneMillion", numeric: true, label: "Deaths per Million" },
  { id: "recovered", numeric: true, label: "Recovered" },
  { id: "active", numeric: true, label: "Active" },
  { id: "critical", numeric: true, label: "Critical" },
  { id: "tests", numeric: true, label: "Tests" },
  { id: "testsPerOneMillion", numeric: true, label: "Tests per Million" },
];

export default function DataTableHead({ activeProps, classes, order, orderBy, onRequestSort }: { activeProps: string[], classes: any, order: 'asc' | 'desc', orderBy: string, onRequestSort: Function }) {
  const createSortHandler = (property: string) => (event: any) => {
    onRequestSort(event, property)
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.filter(cell => activeProps.includes(cell.id) || cell.id === 'country').map((headCell) => (
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
