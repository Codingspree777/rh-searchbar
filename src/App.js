import React, { useState, useEffect } from 'react';
import { SearchBar } from './search';
import './App.css';

function App() {
  const [searchData, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      // const fetchData = async () => {
      //   try {
      //     const response = await fetch(
      //       'https://jsonplaceholder.typicode.com/users'
      //     );
      //     const data = await response.json();
      //     setData(data);
      //     setOriginal(data);
      //   } catch (err) {
      //     alert(err);
      //   }
      // };
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => alert(err));
    };

    fetchData();
  }, []);

  return (
    <div className='App'>
      <div className='Search-Container'>
        <SearchBar searchData={searchData} />
      </div>
    </div>
  );
}

export default App;
