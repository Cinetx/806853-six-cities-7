import {requireAuthorization, logoutUser, loginUser} from '../action';
import {AuthorizationStatus, DEFAULT_USER} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  user: DEFAULT_USER,
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
      state.user = DEFAULT_USER;
    });
});

export {user};
