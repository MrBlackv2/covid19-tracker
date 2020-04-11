import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
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
      </Toolbar>
    </AppBar>
  );
}
