import React, { useState, useEffect } from 'react';
import { Table } from './table';

export function SearchBar() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))
        .then(() => setStatus('fetched'))
        .catch(error => alert(error));
    };
    fetchData();
  }, []);

  

  return (
    <div>
      <div className='search-label'>Search</div>
      <input type='input' className='search-input'></input>
      <Table data={data}/>
    </div>
  );
}
