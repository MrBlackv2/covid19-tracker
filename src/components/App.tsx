import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";

import { Entry } from '../types/Entry';
import DataTable from './DataTable';
import Navbar from './Navbar';
import Charts from './Charts';

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);
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

  const loadEntries = () => {
    fetch('https://corona.lmao.ninja/countries?sort=cases')
      .then(res => res.json())
      .then(entries => setEntries(entries))
      .catch(err => console.error(err));
  }

  const handleDarkModeChange = (dark: boolean) => {
    setDarkMode(dark);
  };

  useEffect(() => {
    loadEntries();
    setInterval(() => {
      loadEntries();
    }, 15000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.root}>
          <Navbar darkMode={darkMode} setDarkMode={handleDarkModeChange} />
          <div className={classes.container}>
            <Switch>
              <Route path="/" exact>
                {entries && entries.length > 0 ? (
                  <DataTable entries={entries} />
                ) : (
                  <div>Loading...</div>
                )}
              </Route>
              <Route path="/charts">
                <Charts entries={entries} />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
