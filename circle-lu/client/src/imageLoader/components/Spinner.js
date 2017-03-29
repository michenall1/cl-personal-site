import React from 'react';

export default function Snipper(props) {
  const loading = props.loading === undefined ? true : props.loading;
  if (!loading) return null;
  return (
    <div className={`spinner-container ${loading ? 'loading' : 'done'}`}>
      <div className='spinner'>
        <div className='bubble-1'></div>
        <div className='bubble-2'></div>
      </div>
    </div>
  );
}