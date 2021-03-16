import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

// import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  // formSubmitHendler = (data) => {
  //   console.log(data);
  //   const myContacts = {
  //     name: data.name,
  //     number: data.number,
  //   };
  // };

  // ==========================  ContactForm ====================

  state = {
    contacts: [],
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  formSubmitHandler = (data) => {
    console.log(data);
  };

  // ==========================  ContactForm  ===============================

  render() {
    const { name } = this.state;
    const { number } = this.state;
    const { id } = uuidv4;
    const contacts = this.state;

    return (
      <>
        <h1 className="title">Phonebook</h1>

        <ContactForm onSubmit={this.formSubmitHandler} />

        <h1 className="title">Contacts</h1>

        <div contacts={contacts}>
          <ul>
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
