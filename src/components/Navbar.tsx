import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Corona Tracker</Typography>
      </Toolbar>
    </AppBar>
  );
}
