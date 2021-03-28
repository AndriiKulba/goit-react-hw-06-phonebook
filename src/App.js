import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactItem from './components/ContactItem';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <ContactForm title="Phonebook" />
          <ContactList title="Contacts">
            <Filter />
            <ContactItem />
          </ContactList>
        </Container>
      </div>
    );
  }
}

export default App;
