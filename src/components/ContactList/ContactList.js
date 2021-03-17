import React from 'react';
import PropTypes from 'prop-types';
// import s from '../ContactList/ContactList.module.css';

// const ContactList = ({ contacts, ondeleteContact }) => {
//   return (
//     <>
//       <ul className={s.list}>
//         {contacts.map(({ id, name, number }) => (
//           <li className={s.item} key={id}>
//             <span className={s.text}>{name}: </span>
//             <span className={s.text}>{number}</span>
//             <button className={s.btn} onClick={() => ondeleteContact(id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onDeleteContact: PropTypes.func,
// };

// export default ContactList;

const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

// ContactList.propTypes = {
//   contacts: PropTypes.array,
//   id: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
//   onDeleteContact: PropTypes.func,
// };

export default ContactList;
