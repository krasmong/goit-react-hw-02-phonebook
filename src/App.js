import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';

import ContactList from './components/ContactList/ContactList';

import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ),
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = (data) => {
    // console.log(data);

    const myContacts = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, myContacts],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm OnSaveContacts={this.formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <ContactList contacts={contacts} />
      </>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};

export default App;
