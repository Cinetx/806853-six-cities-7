import {SORT_TYPE} from '../const';

export const filterOffers = (city, offersArray) => offersArray.filter((offer) => city.toLowerCase() === offer.city.name.toLowerCase());

export const sortOffers = (sortType, offers) => {

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
};
