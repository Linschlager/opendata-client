import React from 'react';

const Filter = ({ options, onChange }) => {
  return (
   <select onChange={onChange}>
     <option defaultChecked disabled>Choose a Location Type</option>
     {
       options.map(o => <option key={o} value={o}>{o.toUpperCase()}</option>)
     }
   </select>
  );
};

export default Filter;