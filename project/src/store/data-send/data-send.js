import {commentSend} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  comment: {
    comment: '',
    rating: null,
  },
};

const dataSend = createReducer(initialState, (builder)=>{
  builder
    .addCase(commentSend, (state, action) => {
      state.comment = action.payload;
    });
});

export {dataSend};
