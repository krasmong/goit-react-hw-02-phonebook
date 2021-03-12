import { number } from 'prop-types';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  static defaultProps = {
    name: '',
    // number: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    name: PropTypes.string,
    // number: PropTypes.string,
  };

  state = {
    contacts: [],
    name: '',
  };
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
    // console.log(`handleChange: ${this.state.name}`);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`handleSubmit: ${this.state}`);

    this.props.onSubmit(this.state.contacts);
    // this.props.OnSaveContacts(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // ==========================  ContactForm  ===============================

  // ==========================  ContactList  ===============================

  // ==========================  ContactList  ===============================

  render() {
    const { name } = this.state;
    const { id } = uuidv4;
    const contacts = this.state;

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <h1 className="title">Contacts</h1>

        <div OnSaveContacts={contacts}>
          <ul>
            <li key={id}>
              <span>{name}:</span>
              <span>{number}</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
