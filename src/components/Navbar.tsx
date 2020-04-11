import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
  Switch
} from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  darkSwitch: {
    marginLeft: theme.spacing(2)
  }
}));

export default function Navbar({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Corona Tracker
        </Typography>
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Table
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="/charts" style={{ textDecoration: "none", color: "white" }}>
            Charts
          </Link>
        </Button>
        <Switch
          className={classes.darkSwitch}
          checked={darkMode}
          onChange={(ev) => setDarkMode(ev.target.checked)}
        />
        <Brightness3Icon />
      </Toolbar>
    </AppBar>
  );
}
