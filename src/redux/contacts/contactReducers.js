import { combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const contactAndFilterReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
