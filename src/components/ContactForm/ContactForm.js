import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const nameInputID = uuidv4();
const numberInputID = uuidv4();
const ContactForm = ({ title, name, number, handleChange, handleSubmit }) => {
  return (
    <div className={s.phonebook}>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} className={s.phonebook__form}>
        <div>
          <div className={s.phonebook__field}>
            <Icon style={{ color: grey[50], fontSize: 20 }}>perm_identity</Icon>
            <input
              type="text"
              name="name"
              value={name}
              id={nameInputID}
              onChange={handleChange}
            />
            <label className={s.phonebook__name}>Name</label>
          </div>
          <div className={s.phonebook__field}>
            <Icon style={{ color: grey[50], fontSize: 20 }}>phone</Icon>
            <input
              type="tel"
              name="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder={'111-22-33'}
              value={number}
              id={numberInputID}
              onChange={handleChange}
            />
            <label htmlFor={numberInputID} className={s.phonebook__tel}>
              Phone
            </label>
          </div>
        </div>
        <button type="submit" className={s.phonebook__btn}>
          <Icon style={{ color: grey[50], fontSize: 40 }}>add_circle</Icon>
        </button>
      </form>
    </div>
  );
};
ContactForm.defaultProps = { title: 'Phonebook', name: '', number: '' };
ContactForm.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
