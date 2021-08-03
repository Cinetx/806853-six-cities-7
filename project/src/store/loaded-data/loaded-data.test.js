import {loadedData} from './loaded-data';
import {DEFAULT_CITY} from '../../const';
import {ActionType} from '../action';

describe('Reducer: dataLoaded',
  () => {
    const fakeInitialState = {
      isDataLoaded: false,
      isDataOfferLoaded: false,
      offers: [],
      reviews: [],
      selectedOffer: {},
      activeOffer: null,
      city: DEFAULT_CITY,
      sortMenuIsOpen: false,
    };

    const offers = [
      {
        id: 1,
        name: 'Beautiful luxurious apartment at great location',
        rating: 4,
        price: 120,
        type: 'Apartment',
        isFavorite: false,
        isPremium: false,
        previewImage: 'img/1.png',

        bedrooms: 3,
        maxAdults: 4,
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],

        city: {
          name: 'Amsterdam',
          location: {
            lat: 52.370216,
            lng: 4.895168,
            zoom: 10,
          },
        },

        host: {
          avatar: 'img/1.png',
          id: 3,
          isPro: false,
          name: 'Angelina',
        },

        images: ['img/1.png', 'img/2.png'],

        location: {
          lat: 52.3909553943508,
          lng: 4.85309666406198,
          zoom: 8,
        },
      },

      {
        id: 2,
        name: 'Wood and stone place',
        rating: 5,
        price: 80,
        type: 'Private room',
        isFavorite: true,
        isPremium: true,
        previewImage: 'img/1.png',

        bedrooms: 3,
        maxAdults: 4,
        description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],

        city: {
          name: 'Amsterdam',
          location: {
            lat: 52.370216,
            lng: 4.895168,
            zoom: 10,
          },
        },

        host: {
          avatar: 'img/1.png',
          id: 3,
          isPro: true,
          name: 'Angelina',
        },

        images: ['img/1.png', 'img/2.png'],

        location: {
          lat: 52.369553943508,
          lng: 4.85309666406198,
          zoom: 8,
        },
      },
    ];

    const reviews = [
      {
        id: 1,
        date: '2019-05-08T14:13:56.569Z',
        comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
        rating: 4,

        user: {
          avatarUrl: 'img/avatar-max.jpg',
          id: 2,
          isPro: true,
          name: 'Max',
        },
      },

      {
        id: 2,
        date: '2019-08-08T14:13:56.569Z',
        comment: 'A quiet cozy and picturesque.',
        rating: 3,

        user: {
          avatarUrl: 'img/avatar-angelina.jpg',
          id: 3,
          isPro: true,
          name: 'Maxi',
        },
      },
    ];

    const offer = {
      id: 1,
      name: 'Beautiful luxurious apartment at great location',
      rating: 4,
      price: 120,
      type: 'Apartment',
      isFavorite: false,
      isPremium: false,
      previewImage: 'img/1.png',

      bedrooms: 3,
      maxAdults: 4,
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],

      city: {
        name: 'Amsterdam',
        location: {
          lat: 52.370216,
          lng: 4.895168,
          zoom: 10,
        },
      },
    };

    const city = {
      name: 'Paris',
      location: {
        lat: 48.86471,
        lng: 2.3,
        zoom: 12,
      },
    };

    it('without additional parameters should return initial state',
      () => {
        expect(loadedData(undefined, {})).toEqual(fakeInitialState);
      });

    it('load offers return offers',
      () => {
        const state = {offers: []};
        const loadOffersActions = {
          type: ActionType.LOAD_OFFERS,
          payload: offers,
        };
        expect(loadedData(state, loadOffersActions)).toEqual({offers, isDataLoaded: true});
      });

    it('load reviews return reviews',
      () => {
        const state = {reviews: []};
        const loadReviewsActions = {
          type: ActionType.LOAD_REVIEWS,
          payload: reviews,
        };
        expect(loadedData(state, loadReviewsActions)).toEqual({reviews, isDataLoaded: true});
      });

    it('load id active offer',
      () => {
        const state = {activeOffer: null};
        const showActiveOfferActions = {
          type: ActionType.ACTIVE_OFFER,
          payload: offer.id,
        };
        expect(loadedData(state, showActiveOfferActions)).toEqual({activeOffer: offer.id});
      });

    it('change favorite status offer',
      () => {
        const state = {offers: offers, selectedOffer: offer};
        const changeOfferFavoriteStatusActions = {
          type: ActionType.FAVORITE_STATUS_CHANGE,
          payload: offer.isFavorite,
        };
        expect(loadedData(state, changeOfferFavoriteStatusActions))
          .toEqual({offers: offers, selectedOffer: offer});
      });

    it('change city',
      () => {
        const state = {city: {}, sortMenuIsOpen: false};
        const cityChangeActions = {
          type: ActionType.CITY_CHANGE,
          payload: city,
        };
        expect(loadedData(state, cityChangeActions)).toEqual({city, sortMenuIsOpen: false});
      });
  },
);
