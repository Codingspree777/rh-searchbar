import React, { useState, useEffect } from 'react';
import { Table } from './table';

export function SearchBar() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState();
  const [doNotMutate, setOriginal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setData(data)
          setOriginal(data)
        })
        .then(() => setStatus('fetched'))
        .catch(error => alert(error));
    };
    fetchData();
  }, []);

  const search = (event) => {
    event.preventDefault();
   
    const filtered = data.filter((el)=> {
      if(!isNaN(event.target.value)) {
        return el.phone.toLowerCase().includes(event.target.value.toLowerCase());
      } else {
        return el.name.toLowerCase().includes(event.target.value.toLowerCase());
      }
    })

   if(event.target.value === '') {
    setData(doNotMutate)
   } else {
    setData(filtered);
   }
  }

  return (
    <div>
      <div className='search-label'>Search</div>
      <input onChange={search} type='input' className='search-input'></input>
      <Table data={data}/>
    </div>
  );
}
