import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TablePagination,
  Modal,
  fade,
  InputBase
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { Entry } from '../types/Entry';
import DataTableHead from './DataTableHead';
import CountryDetail from './CountryDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  paper: {
    overflow: 'auto',
    maxHeight: '100%',
    width: '100%'
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
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}));

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

export default function DataTable({ entries }: { entries: Entry[]}) {
  const classes = useStyles();
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [orderBy, setOrderBy] = useState('cases');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [detailsOpen, setDetailsOpen] = useState<Entry | null>(null);
  const [countrySearch, setCountrySearch] = useState('');

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

  const filteredEntries = countrySearch.length < 1 ?
    entries :
    entries.filter(entry => entry.country.toLowerCase().includes(countrySearch.toLowerCase()));

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredEntries.length - page * rowsPerPage);

  const handleClose = () => {
    setDetailsOpen(null);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={(ev) => setCountrySearch(ev.target.value)}
          />
        </div>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="table"
          >
            <DataTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={filteredEntries.length}
            />
            <TableBody>
              {stableSort(filteredEntries, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((entry: Entry, index) => (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={entry.country}
                    onClick={() => setDetailsOpen(entry)}
                  >
                    <TableCell
                      align="left"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        style={{ height: 20, marginRight: 10 }}
                        src={entry.countryInfo.flag}
                        alt={entry.country}
                      />
                      {entry.country}
                    </TableCell>
                    <TableCell align="right">{entry.cases}</TableCell>
                    <TableCell align="right">{entry.todayCases}</TableCell>
                    <TableCell align="right">{entry.casesPerOneMillion}</TableCell>
                    <TableCell align="right">{entry.deaths}</TableCell>
                    <TableCell align="right">{entry.todayDeaths}</TableCell>
                    <TableCell align="right">{entry.deathsPerOneMillion}</TableCell>
                    <TableCell align="right">{entry.recovered}</TableCell>
                    <TableCell align="right">{entry.active}</TableCell>
                    <TableCell align="right">{entry.critical}</TableCell>
                    <TableCell align="right">{entry.tests}</TableCell>
                    <TableCell align="right">{entry.testsPerOneMillion}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredEntries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal open={detailsOpen !== null} onClose={handleClose}>
        <div>
          <CountryDetail entry={detailsOpen as Entry} />
        </div>
      </Modal>
    </div>
  );
}
