import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";
import { connect } from 'react-redux';

import Navbar from './Navbar';
import AppDrawerContainer from './AppDrawerContainer';
import Contents from './Contents';
import { setDarkMode, setMobileOpen } from '../redux/actions';

interface AppProps {
  darkMode: boolean;
  setDarkMode: Function;
  mobileOpen: boolean;
  setMobileOpen: Function;
}

const drawerWidth = 220;

function App({ darkMode, setDarkMode, mobileOpen, setMobileOpen }: AppProps) {
  const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: green,
      type: darkMode ? 'dark' : 'light',
    },
  });

  const useStyles = makeStyles({
    root: {
      background: theme.palette.background.default,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  });

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
          <Contents drawerWidth={drawerWidth} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: any) => ({
  darkMode: state.app.darkMode,
  mobileOpen: state.app.mobileOpen
});

export default connect(mapStateToProps, {
  setDarkMode,
  setMobileOpen
})(App);
