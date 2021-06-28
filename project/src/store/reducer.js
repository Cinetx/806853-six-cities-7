import {OFFERS} from '../mock/offers';
import {CITY} from '../const';
import {ActionType} from './action';

const startCity = 'Paris';

const initialState = {
  city: CITY.find((item) => item.name === startCity),
  offers: OFFERS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return {
        ...state,
        city: CITY.find((item)=> item.name === action.payload.name),
      };

    default: return state;
  }


};

export {reducer};
