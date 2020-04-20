import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles, createStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";

import Navbar from './Navbar';
import WorldPage from './WorldPage';
import WorldChartsPage from './WorldChartsPage';
import StatesPage from './StatesPage';
import StateChartsPage from './StateChartsPage';
import AppDrawerContainer from './AppDrawerContainer';

const drawerWidth = 220;

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      type: darkMode ? 'dark' : 'light',
    },
  });

  const useStyles = makeStyles(createStyles({
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
    }
  }));

  const classes = useStyles();

  const handleDarkModeChange = (dark: boolean) => {
    setDarkMode(dark);
    localStorage.setItem('darkMode', dark ? 'true' : 'false');
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={classes.root}>
          <Navbar
            darkMode={darkMode}
            handleDarkModeChange={handleDarkModeChange}
            handleDrawerToggle={handleDrawerToggle}
            drawerWidth={drawerWidth}
          />
          <AppDrawerContainer drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <div className={classes.container}>
            <Switch>
              <Redirect exact path="/" to="/states" />
              <Route path="/world" component={WorldPage} />
              <Route path="/worldcharts" component={WorldChartsPage} />
              <Route path="/states" component={StatesPage} />
              <Route path="/statecharts" component={StateChartsPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
