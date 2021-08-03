import {commentSend, setCommentSendSuccess, setCommentSendError, setCommentSending} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  comment: {
    comment: '',
    rating: null,
  },
  isCommentSendSuccess: false,
  isCommentSendError: false,
  isCommentSending: false,
};

const sentData = createReducer(initialState, (builder) => {
  builder
    .addCase(commentSend, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setCommentSendSuccess, (state, action) => {
      state.isCommentSendSuccess = action.payload;
    })
    .addCase(setCommentSendError, (state, action) => {
      state.isCommentSendError = action.payload;
    })
    .addCase(setCommentSending, (state, action) => {
      state.isCommentSending = action.payload;
    });
});

export {sentData};
