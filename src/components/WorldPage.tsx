import React, { useEffect } from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import DataTable from './DataTable';
import { WorldData, getWorldDataProps } from '../types/WorldData';
import { TableHeadCell } from '../types/TableHeadCell';
import { loadWorldData, setActiveWorldProps, setWorldSearch } from '../redux/actions';

interface WorldPageProps {
  data: WorldData[];
  setData: Function;
  activeProps: string[];
  setActiveProps: Function;
  search: string;
  setSearch: Function;
}

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

const allProps = getWorldDataProps();

const headCells: TableHeadCell[] = [{ id: 'country', label: 'Country', numeric: false }]
  .concat(allProps.map(prop => ({ id: prop.id, label: prop.name, numeric: true })));

const headCell = (row: WorldData) => (
  <TableCell align="left" style={{ display: "flex", alignItems: "center" }}>
    <img
      style={{ height: 20, marginRight: 10 }}
      src={row.countryInfo.flag}
      alt={row.country}
    />
    {row.country}
  </TableCell>
);

function WorldPage({ data, setData, activeProps, setActiveProps, search, setSearch }: WorldPageProps) {
  const classes = useStyles();
  const searchedRows = data.filter(item => item.country.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    function loadData() {
      fetch('https://corona.lmao.ninja/v2/countries?sort=cases')
        .then(res => res.json())
        .then(entries => setData(entries))
        .catch(err => console.error(err));
    }

    loadData();
  }, [setData]);

  return (
    <div className={classes.worldPage}>
      <div className={classes.tableHolder}>
        <DataTable
          idKey="country"
          rows={searchedRows}
          headCells={headCells}
          activeProps={activeProps}
          setActiveProps={setActiveProps}
          allProps={allProps}
          search={search}
          setSearch={setSearch}
          headCell={headCell}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  data: state.world.data,
  activeProps: state.world.activeProps,
  search: state.world.search
});

export default connect(mapStateToProps, {
  setData: loadWorldData,
  setActiveProps: setActiveWorldProps,
  setSearch: setWorldSearch
})(WorldPage);
