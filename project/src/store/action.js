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
  COMMENT_SEND: 'COMMENT_CHANGE',
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
