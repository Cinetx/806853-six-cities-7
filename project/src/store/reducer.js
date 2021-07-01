import {OFFERS} from '../mock/offers';
import {DEFAULT_CITY, DEFAULT_SORT} from '../const';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  offers: OFFERS,
  sort: DEFAULT_SORT,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.SORT_CHANGE:
      return {
        ...state,
        sort: action.payload,
      };

    default:
      return state;
  }
};

export {reducer};
