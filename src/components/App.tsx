import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";

import Navbar from './Navbar';
import AppDrawerContainer from './AppDrawerContainer';
import Contents from './Contents';

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

export default App;
