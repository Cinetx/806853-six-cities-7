import {DEFAULT_SORT} from '../../const';
import {sortMenuOpen, sortTypeChange} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  sortType: DEFAULT_SORT,
  sortMenuIsOpen: false,
};

const sort = createReducer(initialState, (builder) => {
  builder
    .addCase(sortTypeChange, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(sortMenuOpen, (state, action) => {
      state.sortMenuIsOpen = action.payload;
    });
});

export {sort};
