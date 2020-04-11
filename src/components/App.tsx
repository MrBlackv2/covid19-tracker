import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Entry } from '../types/Entry';
import DataTable from './DataTable';
import Navbar from './Navbar';
import Charts from './Charts';

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  const loadEntries = () => {
    console.log('loading...');
    fetch('https://corona.lmao.ninja/countries?sort=cases')
      .then(res => res.json())
      .then(entries => setEntries(entries))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    loadEntries();
    setInterval(() => {
      loadEntries();
    }, 15000);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div style={{ padding: 10 }}>
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
  );
}

export default App;
