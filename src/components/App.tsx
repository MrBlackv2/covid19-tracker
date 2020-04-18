import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";

import Navbar from './Navbar';
import WorldPage from './WorldPage';
import ChartsPage from './ChartsPage';
import StatesPage from './StatesPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
    },
    container: {
      flex: '1 1 auto',
      position: 'relative',
      margin: 10
    }
  });

  const classes = useStyles();

  const handleDarkModeChange = (dark: boolean) => {
    setDarkMode(dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <Navbar darkMode={darkMode} setDarkMode={handleDarkModeChange} />
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
