import {DEFAULT_CITY, DEFAULT_SORT, AuthorizationStatus} from '../const';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortType: DEFAULT_SORT,
  sortMenuIsOpen: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  activeOffer: null,
  userEmail: '',
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
        sortMenuIsOpen: false,
      };

    case ActionType.SORT_TYPE_CHANGE:
      return {
        ...state,
        sortType: action.payload,
      };

    case ActionType.SORT_MENU_OPEN:
      return {
        ...state,
        sortMenuIsOpen: action.payload,
      };

    case ActionType.ACTIVE_OFFER:
      return {
        ...state,
        activeOffer: action.payload,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGIN:
      return {
        ...state,
        userEmail: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    default:
      return state;
  }
};

export {reducer};
