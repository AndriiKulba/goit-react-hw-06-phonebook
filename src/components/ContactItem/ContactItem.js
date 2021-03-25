import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactItem.module.css';

const ContactItem = ({ visibleContacts, deleteContact }) => {
  return (
    <ul className={s.contacts__list}>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contacts__item}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              <Icon style={{ color: grey[50], fontSize: 26 }}>
                delete_forever
              </Icon>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
ContactItem.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;
