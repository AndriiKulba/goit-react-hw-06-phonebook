import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
}));
const deleteContact = createAction('contacts/deleteContact');
const addValue = (name, value) => ({
  type: `values/add${name}`,
  payload: value,
});
const resetValue = createAction('values/reset');

export default {
  addContact,
  deleteContact,
  addValue,
  resetValue,
};

// const addName = createAction('values/addname');
// const addNumber = createAction('values/addnumber');
// const addFilter = createAction('values/addfilter');
