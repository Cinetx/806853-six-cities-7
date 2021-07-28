import {
  cityChange,
  loadOffers,
  loadReviews,
  loadSelectOffer,
  showActiveOffer,
  changeOfferFavoriteStatus
} from '../action';
import {DEFAULT_CITY} from '../../const';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  isDataLoaded: false,
  isDataOfferLoaded: false,
  offers: [],
  reviews: [],
  selectedOffer: {},
  activeOffer: null,
  city: DEFAULT_CITY,
  sortMenuIsOpen: false,
};

const dataLoaded = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadSelectOffer, (state, action) => {
      state.selectedOffer = action.payload;
      state.isDataOfferLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(showActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(changeOfferFavoriteStatus, (state, action) => {
      const offer = state.offers.find((item) => item.id === action.payload);
      if (offer) {
        offer.isFavorite = !offer.isFavorite;
      }

      if (action.payload === state.selectedOffer.id) {
        state.selectedOffer.isFavorite = !state.selectedOffer.isFavorite;
      }
    })
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      state.sortMenuIsOpen = false;
    });
});

export {dataLoaded};
