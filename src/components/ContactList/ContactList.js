import React from 'react';
import s from './ContactList.module.css';

// import s from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  console.log(contacts);

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <span className={s.text}> {name} : </span>
            <span className={s.text}> {number} </span>

            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
