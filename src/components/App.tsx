import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";

import Navbar from './Navbar';
import WorldPage from './WorldPage';
import ChartsPage from './ChartsPage';
import StatesPage from './StatesPage';
import { Hidden, Drawer } from '@material-ui/core';
import AppDrawer from './AppDrawer';

const drawerWidth = 220;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      type: darkMode ? 'dark' : 'light',
    },
  });

  const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      background: theme.palette.background.default,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column'
    },
    container: {
      flex: '1 1 auto',
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    }
  }));

  const classes = useStyles();

  const handleDarkModeChange = (dark: boolean) => {
    setDarkMode(dark);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <Navbar
            darkMode={darkMode}
            handleDarkModeChange={handleDarkModeChange}
            handleDrawerToggle={handleDrawerToggle}
            drawerWidth={drawerWidth}
          />
          <nav className={classes.drawer} aria-label="side nav">
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onClick={handleDrawerToggle}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
              >
                <AppDrawer />
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                open
              >
                <AppDrawer />
              </Drawer>
            </Hidden>
          </nav>
          <div className={classes.container}>
            <Switch>
              <Redirect exact path="/" to="/states" />
              <Route path="/world" component={WorldPage} />
              <Route path="/charts" component={ChartsPage} />
              <Route path="/states" component={StatesPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
