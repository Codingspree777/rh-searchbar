import React, { useState, useEffect } from 'react';

export function SearchBar() {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState();

  useEffect(() => {
    if (status === 'idle') {
      const fetchData = async () => {
        setStatus('fetching');
        await fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setData(data))
          .then(() => setStatus('fetched'))
          .catch((error)=> alert(error))
      };
      fetchData();
    }
  });

  console.log(data);

  return <div>"hi shoot"</div>;
}
