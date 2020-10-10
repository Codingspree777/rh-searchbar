import React, { useState, useEffect } from 'react';
import { Table } from './table';

export function SearchBar() {
  const [data, setData] = useState();
  const [doNotMutate, setOriginal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setData(data);
        setOriginal(data);
      } catch (err) {
        alert(err);
      }
    };

    fetchData();
  }, []);

  const search = event => {
    event.preventDefault();

    const filtered = data.filter(el => {
      if (!isNaN(event.target.value)) {
        return el.phone
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      } else {
        return el.name.toLowerCase().includes(event.target.value.toLowerCase());
      }
    });

    if (event.target.value === '') {
      setData(doNotMutate);
    } else {
      setData(filtered);
    }
  };

  return (
    <div>
      <div className='search-label'>Search</div>
      <input onChange={search} type='input' className='search-input'></input>
      <Table data={data} />
    </div>
  );
}
