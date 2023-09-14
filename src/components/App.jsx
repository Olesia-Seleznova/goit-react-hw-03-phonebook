import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForn';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  newContact = data => {
    const contacts = this.state.contacts;
    const isDublicate = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDublicate) {
      return alert(`${data.name} is already in contacts!`);
    }

    const contact = {
      ...data,
      id: nanoid(),
    };

    this.setState(({ contacts }) => {
      return { contacts: [contact, ...contacts] };
    });
  };

  onDelete = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filteredNames = () => {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({
        contacts: parseContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phone book</h1>
        <ContactForm onSubmit={this.newContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onFilter={this.setFilter} />
        <Contacts contacts={this.filteredNames()} onDelete={this.onDelete} />
      </div>
    );
  }
}
