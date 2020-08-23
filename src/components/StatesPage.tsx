import React, { useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { CurrStateData, getCurrStateProps } from '../types/CurrStateData';
import DataTable from './DataTable';
import { TableHeadCell } from '../types/TableHeadCell';
import { loadCurrStateData, setActiveStateProps, setStateSearch, setStateOrder, setStateOrderBy, loadStates } from '../redux/actions';
import { StateInfo } from '../types/StateInfo';

interface StatesPageProps {
  states: StateInfo[];
  loadStates: Function;
  data: CurrStateData[];
  setData: Function;
  activeProps: string[];
  setActiveProps: Function;
  search: string;
  setSearch: Function;
  order: 'asc' | 'desc';
  setOrder: Function;
  orderBy: string;
  setOrderBy: Function;
}

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

function StatesPage({
  states,
  loadStates,
  data,
  setData,
  activeProps,
  setActiveProps,
  search,
  setSearch,
  order,
  setOrder,
  orderBy,
  setOrderBy
}: StatesPageProps) {
  const classes = useStyles();
  const searchedRows = data.filter(item => item.state.toLowerCase().includes(search.toLowerCase()));

  const headCell = (row: CurrStateData) => (
    <TableCell align="left" style={{ display: "flex", alignItems: "center" }}>
      {states.find(item => item.state === row.state)?.name}
    </TableCell>
  );

  useEffect(() => {
    function loadData() {
      fetch(`https://api.covidtracking.com/v1/states/info.json`)
        .then(res => res.json())
        .then(items => loadStates(items.map((item: any) => ({ state: item.state, name: item.name }))))
        .catch(err => console.error(err));
    }

    if (states.length === 0) {
      loadData();
    }
  }, [states, loadStates]);

  useEffect(() => {
    function loadEntries() {
      fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(res => res.json())
        .then(entries => setData(entries))
        .catch(err => console.error(err));
    }

    loadEntries();
  }, [setData]);

  return (
    <div className={classes.statesPage}>
      <div className={classes.tableHolder}>
        <DataTable
          idKey="state"
          rows={searchedRows}
          headCells={headCells}
          activeProps={activeProps}
          setActiveProps={setActiveProps}
          allProps={allProps}
          search={search}
          setSearch={setSearch}
          headCell={headCell}
          order={order}
          setOrder={setOrder}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  states: state.histState.states,
  data: state.currState.data,
  activeProps: state.currState.activeProps,
  search: state.currState.search,
  order: state.currState.order,
  orderBy: state.currState.orderBy
});

export default connect(mapStateToProps, {
  loadStates: loadStates,
  setData: loadCurrStateData,
  setActiveProps: setActiveStateProps,
  setSearch: setStateSearch,
  setOrder: setStateOrder,
  setOrderBy: setStateOrderBy
})(StatesPage);
