import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

import ContactList from './components/ContactList/ContactList';

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
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  // nameInputId = uuidv4();
  // numberInputId = uuidv4();

  formSubmitHandler = (data) => {
    console.log(data);

    const myContacts = {
      id: uuidv4(),
      name: data.neme,
      number: data.number,
    };

    this.setState((prevState) => ({
      contacts: [myContacts, ...prevState.contacts],
    }));
  };

  // ==========================  ContactForm  ===============================

  render() {
    const contacts = this.state;

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

export default App;
