import {requireAuthorization, logoutUser, loginUser} from '../action';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: {
    email: '',
    avatarUrl: '',
  },
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loginUser, (state, action)=>{
      state.user = action.payload;
    })
    .addCase(logoutUser, (state)=>{
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
