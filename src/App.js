import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
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
    filter: '',
  };

  formSubmitHandler = data => {
    const myContacts = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, myContacts],
      };
    });
  };
  // ==================== Filter =================================

  //   https://www.youtube.com/watch?v=2tPxoJxaCes
  // 1:27.00

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFiltredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    // const contacts = this.filtredContacts();

    // берем фтльтр и на базе стейта
    // составляем и рисуем новую коллекцию

    const filtredContacts = this.getFiltredContacts();
    // возвращаем только те контакты, свойство "name", которых
    // включает в себя текущее значение фильтра

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm OnSaveContacts={this.formSubmitHandler} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList contacts={filtredContacts} />
      </>
    );
  }
}

export default App;
