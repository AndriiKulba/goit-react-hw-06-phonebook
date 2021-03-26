import './App.css';
import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactItem from './components/ContactItem';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log(this.state);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  componentWillUnmount() {}

  handleSubmit = e => {
    e.preventDefault();
    const auditContact = this.state.contacts.filter(
      contact => contact.name === this.state.name,
    );
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    auditContact.length === 0
      ? this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }))
      : alert('This contact already exist');

    this.reset();
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  filterInputID = uuidv4();

  render() {
    const { contacts, filter, name, number } = this.state;
    const visibleContacts = contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
      )
      .sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
    return (
      <div className="App">
        <Container>
          <ContactForm
            title="Phonebook"
            name={name}
            number={number}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <ContactList title="Contacts">
            <Filter filter={filter} handleChange={this.handleChange} />
            <ContactItem
              visibleContacts={visibleContacts}
              deleteContact={this.deleteContact}
            />
          </ContactList>
        </Container>
      </div>
    );
  }
}

export default App;
