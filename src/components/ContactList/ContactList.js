import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { v4 as uuidv4 } from 'uuid';

const ContactList = ({ title, children }) => {
  return (
    <div className={s.contacts}>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};
ContactList.propType = { title: PropTypes.string };
export default ContactList;
