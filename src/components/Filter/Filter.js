import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';

const filterInputID = uuidv4();
const Filter = ({ filter, handleChange }) => {
  return (
    <label htmlFor={filterInputID} className={s.phonebook__filter}>
      <button className={s.phonebook__btn}>
        <span className={s.phonebook__icon}></span>
      </button>
      <input
        type="text"
        name="filter"
        value={filter}
        id={filterInputID}
        onChange={handleChange}
        placeholder=" Find contacts by name"
      />
    </label>
  );
};

Filter.defaultProps = { filter: '' };
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
