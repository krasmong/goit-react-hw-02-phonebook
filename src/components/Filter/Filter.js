import React from 'react';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    {/* Find contacts by name: */}
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
    />
  </label>
);

export default Filter;
