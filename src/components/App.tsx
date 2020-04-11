import React, { useEffect, useState } from 'react';

import { Entry } from '../types/Entry';
import DataTable from './DataTable';
import Navbar from './Navbar';

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
    <div>
      <Navbar />
      <div style={{ padding: 10 }}>
        {entries && entries.length > 0 ? (
          <DataTable entries={entries} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default App;
