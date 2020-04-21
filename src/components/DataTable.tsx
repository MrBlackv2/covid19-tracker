import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { WorldData } from '../types/WorldData';
import DataTableHead from './DataTableHead';
import Detail from './Detail';
import TableFilter from './TableFilter';
import DataTableRow from './DataTableRow';
import { TableHeadCell } from '../types/TableHeadCell';
import { FilterProp } from '../types/FilterProp';
import DataTableToolbar from './DataTableToolbar';

interface DataTableProps {
  rows: any[];
  headCells: TableHeadCell[];
  activeProps: string[];
  setActiveProps: Function;
  allProps: FilterProp[];
  search: string;
  setSearch: Function;
  idKey: string;
  headCell: any;
}

const useStyles = makeStyles({
  tableRoot: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%'
  },
  paper: {
    overflow: 'auto',
    maxHeight: '100%',
    width: '100%'
  },
  container: {
    maxHeight: `calc(100% - 52px)`,
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  }
});

function descendingComparator(a: any, b: any, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: 'asc' | 'desc', orderBy: string) {
  return order === 'desc' ?
    (a: any, b: any) => descendingComparator(a, b, orderBy) :
    (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any[], comparator: Function) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] = b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function DataTable({ rows, headCells, activeProps, setActiveProps, allProps, search, setSearch, idKey, headCell }: DataTableProps) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState<WorldData | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState(idKey);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event: any, property: string) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  };

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <Paper className={classes.tableRoot}>
        <DataTableToolbar searchTerm={search} setSearchTerm={setSearch} setFilterOpen={setFilterOpen} />
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="table"
          >
            <DataTableHead
              headCells={headCells.filter(cell => activeProps.includes(cell.id) || cell.id === idKey)}
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index) => (
                  <DataTableRow key={row[idKey]} row={row} activeProps={activeProps} setDetailsOpen={setDetailsOpen} headCell={headCell} />
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={activeProps.length + 1} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal open={detailsOpen !== null} onClose={() => setDetailsOpen(null)}>
        <div>
          <Detail data={detailsOpen} allProps={allProps} idKey={idKey} closeModal={() => setDetailsOpen(null)} />
        </div>
      </Modal>
      <Modal open={filterOpen} onClose={() => setFilterOpen(false)}>
        <div>
          <TableFilter
            activeProps={activeProps}
            setActiveProps={setActiveProps}
            allProps={allProps}
            closeModal={() => setFilterOpen(false)}
          />
        </div>
      </Modal>
    </>
  );
}
