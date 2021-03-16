import React from 'react';
// import s from '../ContactList/ContactList.module.css';

const ContactList = ({ conttacts }) => {
  return (
    <>
      <ul>
        {conttacts.map(({ id, name, number }) => (
          <li key={id}>
            <span> {name} : </span>
            <span> {number} </span>

            <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
