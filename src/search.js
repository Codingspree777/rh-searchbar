import React, { useState, useEffect } from 'react';
import { Table } from './table';

export function SearchBar({ searchData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(searchData);
  }, [searchData]);

  const search = event => {
    let text = event.target.value;

    const filtered = data.filter(el => {
      if (isNaN(text)) {
        return el.name.toLowerCase().includes(text.toLowerCase());
      } else {
        return el.phone.toLowerCase().includes(text.toLowerCase());
      }
    });

    if (text === '') {
      setData(searchData);
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
