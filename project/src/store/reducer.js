import {OFFERS} from '../mock/offers';
import {DEFAULT_CITY, DEFAULT_SORT} from '../const';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  offers: OFFERS,
  sortType: DEFAULT_SORT,
  sortMenuIsOpen: false,
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

    default:
      return state;
  }
};

export {reducer};
