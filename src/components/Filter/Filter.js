import React from 'react';

// import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
