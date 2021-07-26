import {NameSpace} from '../root-reducer';
import {createSelector} from 'reselect';
import {SORT_TYPE} from '../../const';
import {getSortType} from '../sort/selectors';

export const getDataLoaded = (state) => state[NameSpace.DATA_LOADED].isDataLoaded;
export const getDataOfferLoaded = (state) => state[NameSpace.DATA_LOADED].isDataOfferLoaded;
export const getOffers = (state) => state[NameSpace.DATA_LOADED].offers;
export const getReviews = (state) => state[NameSpace.DATA_LOADED].reviews;
export const getSelectedOffer = (state) => state[NameSpace.DATA_LOADED].selectedOffer;
export const getActiveOffer = (state) => state[NameSpace.DATA_LOADED].activeOffer;
export const getCity = (state) => state[NameSpace.DATA_LOADED].city;

export const getFavoritesOffers = createSelector(
  [getOffers],
  (offers) => offers.filter((offer)=> offer.isFavorite),
);

export const getFilterOffers = createSelector(
  [getCity, getOffers],
  (city, offers) =>  offers.filter((offer) => city.name.toLowerCase() === offer.city.name.toLowerCase()),
);

export const getSortAndFilterOffers = createSelector(
  [getSortType, getFilterOffers],(sortType, offers)=>{
    switch (sortType) {
      case SORT_TYPE.PRICE_HIGH_TO_LOW:
        return offers.slice().sort((a, b) => b.price - a.price);

      case SORT_TYPE.PRICE_LOW_TO_HIGH:
        return offers.slice().sort((a, b) => a.price - b.price);

      case SORT_TYPE.TOP_RATED:
        return offers.slice().sort((a, b) => b.rating - a.rating);

      default:
        return offers;
    }
  },
);
