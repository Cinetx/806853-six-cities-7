import {OFFERS} from '../mock/offers';
import { DEFAULT_CITY } from '../const';
import {ActionType} from './action';

const initialState = {
  city: DEFAULT_CITY,
  offers: OFFERS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: action.payload,
      };

    default: return state;
  }


};

export {reducer};
