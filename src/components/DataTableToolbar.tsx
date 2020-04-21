import React from 'react';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';

interface DataTableToolbarProps {
  searchTerm: string;
  setSearchTerm: Function;
  setFilterOpen: Function;
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1)
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
    color: 'inherit',
    width: '100%'
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

export default function DataTableToolbar({ searchTerm, setSearchTerm, setFilterOpen }: DataTableToolbarProps) {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
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
          value={searchTerm}
          onChange={(ev) => setSearchTerm(ev.target.value)}
        />
      </div>
      <Button onClick={() => setFilterOpen(true)}>
        <FilterIcon />
      </Button>
    </div>
  );
}
