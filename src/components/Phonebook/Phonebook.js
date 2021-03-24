import React from 'react';
import s from './Phonebook.module.css';
import { v4 as uuidv4 } from 'uuid';

class Phonebook extends React.Component {
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
  nameInputID = uuidv4();
  numberInputID = uuidv4();
  render() {
    const visibleContacts = this.state.contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
      )
      .sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
    return (
      <div className={s.phonebook}>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit} className={s.phonebook__form}>
          <label htmlFor={this.nameInputID} className={s.phonebook__name}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              id={this.nameInputID}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor={this.numberInputID} className={s.phonebook__tel}>
            Phone
            <input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="___-__-__"
              value={this.state.number}
              id={this.numberInputID}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={s.phonebook__btn}>
            Add contact
          </button>
        </form>
        <div className={s.contacts}>
          <h2>Contacts</h2>
          <label htmlFor={this.filterInputID} className={s.phonebook__name}>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              id={this.filterInputID}
              onChange={this.handleChange}
            />
          </label>
          <ul className={s.contacts__list}>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <li key={id} className={s.contacts__item}>
                  <p>
                    {name}: {number}
                  </p>
                  <button type="button" onClick={() => this.deleteContact(id)}>
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Phonebook;
