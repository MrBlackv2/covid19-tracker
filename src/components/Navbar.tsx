import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  IconButton
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import MenuIcon from '@material-ui/icons/Menu';

interface NavBarProps {
  darkMode: boolean;
  handleDarkModeChange: Function;
  handleDrawerToggle: any;
  drawerWidth: number;
}

export default function Navbar({ darkMode, handleDarkModeChange, handleDrawerToggle, drawerWidth }: NavBarProps) {
  const useStyles = makeStyles((theme) => createStyles({
    title: {
      flexGrow: 1
    },
    darkSwitch: {
      marginLeft: theme.spacing(2)
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  }));

  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Corona Tracker
        </Typography>
        <Switch
          className={classes.darkSwitch}
          checked={darkMode}
          onChange={(ev) => handleDarkModeChange(ev.target.checked)}
        />
        <Brightness3Icon />
      </Toolbar>
    </AppBar>
  );
}
