import React from 'react';

export function Table({ data }) {
  const tableData = data ? data : [];
  const ShowData = tableData.map(ele => {
    return (
      <div key={ele.id} className='Table'>
       <div className='cell'>{ele.name}</div>
       <div className='cell'>{ele.username}</div>
       <div className='cell'>{ele.email}</div>
       <div className='cell'>{ele.address.city}</div>
       <div className='cell'>{ele.phone}</div>
      </div>
    );
  });
  return (
    <div className='Table-Container'>
      <div className='Table-header'>
        <div className='cell'>Name</div>
        <div className='cell'>User Name</div>
        <div className='cell'>Email</div>
        <div className='cell'>City</div>
        <div className='cell'>Phone</div>
      </div>
      {ShowData}
    </div>
  );
}
