import { createReducer } from '@reduxjs/toolkit';
import * as actions from './filter-actions';

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
