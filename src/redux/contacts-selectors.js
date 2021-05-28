import { createSelector } from '@reduxjs/toolkit';
export const getLoading = state => state.loading;
export const getFilter = state => state.filter;
const getAllContacts = state => state.items;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
