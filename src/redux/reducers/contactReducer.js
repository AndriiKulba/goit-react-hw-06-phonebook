import {combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactAction from '../actions/contact-actions';

const initialState = [
  { id: 'id-1', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-2', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
];
const contacts = createReducer(initialState, {
  [contactAction.addContact]: (state, { payload }) => [...state, payload],
  [contactAction.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const name = createReducer('', {
  'values/addname': (_, { payload }) => payload,
  [contactAction.resetValue]: (_, { payload }) => payload,
});

const number = createReducer('', {
  'values/addnumber': (_, { payload }) => payload,
  [contactAction.resetValue]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  'values/addfilter': (_, { payload }) => payload,
  [contactAction.resetValue]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, name, number, filter });

// const contacts = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);
//     default:
//       return state;
//   }
// };
// const name = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.NAME_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;

//     default:
//       return state;
//   }
// };
// const number = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.NUMBER_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;
//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.FILTER_CHANGE:
//       return payload;
//     case types.RESET:
//       return payload;
//     default:
//       return state;
//   }
// };
