import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

export const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const isExistContact = state.find(
      ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
    );
    if (isExistContact) {
      alert(`${payload.name} is already in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => {
    alert(payload.message);
    return payload.message;
  },
  [addContactError]: (_, { payload }) => {
    alert(payload.message);
    return payload.message;
  },
  [deleteContactError]: (_, { payload }) => {
    alert(payload.message);
    return payload.message;
  },
  [fetchContactsSuccess]: () => null,
  [addContactSuccess]: () => null,
  [deleteContactSuccess]: () => null,
});

export const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [deleteContactRequest]: () => true,
});
