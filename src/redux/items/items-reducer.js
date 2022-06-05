import { createReducer } from '@reduxjs/toolkit';
import * as actions from './items-actions';

export const itemsReducer = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});
