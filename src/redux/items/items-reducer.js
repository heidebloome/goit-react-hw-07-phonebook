import { createReducer } from '@reduxjs/toolkit';
import * as actions from './items-actions';
import INITIAL_STATE from '../../data/initial-state.json';

export const itemsReducer = createReducer([...INITIAL_STATE], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});
