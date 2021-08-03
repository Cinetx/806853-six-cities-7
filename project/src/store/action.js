import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
  SORT_TYPE_CHANGE: 'SORT_CHANGE',
  SORT_MENU_OPEN: 'SORT_MENU_OPEN',
  ACTIVE_OFFER: 'ACTIVE_OFFER',
  SELECT_OFFER: 'SELECT_OFFER',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'LOGIN',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  COMMENT_SEND: 'COMMENT_SEND',
  FAVORITE_STATUS_CHANGE: 'FAVORITE_STATUS_CHANGE',
  SET_COMMENT_SEND_SUCCESS: 'SET_COMMENT_SEND_SUCCESS',
  SET_COMMENT_SEND_ERROR: 'SET_COMMENT_SEND_ERROR',
  COMMENT_SENDING: 'COMMENT_SENDING',
};

export const cityChange = createAction(ActionType.CITY_CHANGE, (currentCity)=> ({payload: currentCity}));
export const sortTypeChange = createAction(ActionType.SORT_TYPE_CHANGE, (sortType)=>({payload: sortType}));
export const sortMenuOpen = createAction(ActionType.SORT_MENU_OPEN, (menu)=>({payload: menu}));
export const showActiveOffer = createAction(ActionType.ACTIVE_OFFER, (id)=> ({payload: Number(id)}));
export const loadSelectOffer = createAction(ActionType.SELECT_OFFER, (offer)=>({payload: offer}));
export const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers)=> ({payload: offers}));
export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews)=>({payload: reviews}));
export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status)=>({payload: status}));
export const loginUser = createAction(ActionType.LOGIN, (user)=> ({payload: user}));
export const logoutUser = createAction(ActionType.LOGOUT);
export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url)=>({payload: url}));
export const commentSend = createAction(ActionType.COMMENT_SEND, (comment)=>({payload: comment}));
export const changeOfferFavoriteStatus = createAction(ActionType.FAVORITE_STATUS_CHANGE, (id)=>({payload: id}));
export const setCommentSendSuccess = createAction(ActionType.SET_COMMENT_SEND_SUCCESS, (isCommentSendSuccess)=>({payload: isCommentSendSuccess}));
export const setCommentSendError = createAction(ActionType.SET_COMMENT_SEND_ERROR, (isCommentSendError)=>({payload: isCommentSendError}));
export const setCommentSending = createAction(ActionType.COMMENT_SENDING, (isCommentSending)=>({payload: isCommentSending}));
