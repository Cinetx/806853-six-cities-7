import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {
  checkAuth,
  fetchActiveOffer, fetchFavoriteOffers,
  fetchOffersList,
  fetchOffersNearbyList,
  fetchReviewsList,
  login, sendMessage
} from './api-action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClientUser, adaptToClient, adaptToClientReviews} from '../utils/utils';

let api = null;

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
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: 'Amsterdam',
  },

  host: {
    avatar: 'img/1.png',
    id: 3,
    isPro: false,
    name: 'Angelina',
  },

  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8,
  },

  images: ['img/1.png', 'img/2.png'],
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
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },

    host: {
      avatar: 'img/1.png',
      id: 3,
      isPro: false,
      name: 'Angelina',
    },

    images: ['img/1.png', 'img/2.png'],

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
  },
];

const comment = {
  comment: 'test comment',
  rating: 1,
  id: 1,
};

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
];

const review = {
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
};

const user = {
  id: 1,
  email: 'fakemail@gmail.com',
  password: 'fakepass',
  name: 'fakeName',
  token: 'fakeToken',
  avatarUrl: 'fakeUrl.img',
  isPro: false,
};

describe('Async operations',
  () => {
    beforeAll(() => {
      api = createAPI(() => {
      });
    });


    it('should make a correct API call to GET /login', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const checkAuthLoader = checkAuth();

      apiMock
        .onGet(APIRoute.LOGIN)
        .reply(200, [{fake: true}]);

      return checkAuthLoader(dispatch, () => {
      }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH,
          });
        });
    });

    it('should make a correct API call to POST /login', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const fakeUser = {email: 'test@test.ru', password: '123456'};
      const loginLoader = login(fakeUser);

      apiMock
        .onPost(APIRoute.LOGIN)
        .reply(200, user);

      return loginLoader(dispatch, () => {
      }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(3);

          expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: ActionType.REDIRECT_TO_ROUTE,
            payload: AppRoute.MAIN,
          });
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOGIN,
            payload: adaptToClientUser(user),
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH,
          });

        });
    });

    it('should make a correct API call to GET /offers', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const offersLoader = fetchOffersList();

      apiMock
        .onGet(APIRoute.OFFERS)
        .reply(200, offers);

      return offersLoader(dispatch,
        () => {
        }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_OFFERS,
            payload: [adaptToClient(offer)],
          });
        });
    });

    it('should make a correct API call to GET /nearby', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const nearbyOffersLoader = fetchOffersNearbyList(1);

      apiMock
        .onGet(APIRoute.OFFERS + 1 + APIRoute.NEARBY)
        .reply(200, offers);

      return nearbyOffersLoader(dispatch,
        () => {
        }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);

          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_OFFERS,
            payload: [adaptToClient(offer)],
          });
        });
    });

    it('should make a correct API call to GET /offer', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const activeOfferLoader = fetchActiveOffer(1);

      apiMock
        .onGet(APIRoute.OFFERS + 1)
        .reply(200, offer);

      return activeOfferLoader(dispatch,
        () => {
        }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.SELECT_OFFER,
            payload: adaptToClient(offer),
          });
        });
    });

    it('should make a correct API call to GET /reviews', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const reviewsLoader = fetchReviewsList(1);

      apiMock
        .onGet(APIRoute.REVIEWS + 1)
        .reply(200, reviews);

      return reviewsLoader(dispatch,
        () => {
        }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_REVIEWS,
            payload: [adaptToClientReviews(review)],
          });
        });
    });

    it('should make a correct API call to POST /message', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const sendMessageLoader = sendMessage(comment.comment, comment.rating, 1);

      apiMock
        .onPost(APIRoute.REVIEWS + 1)
        .reply(200, [comment]);

      return sendMessageLoader(dispatch, () => {
      }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(6);
        });
    });

    it('should make a correct API call to GET /favorite', () => {
      const apiMock = new MockAdapter(api);
      const dispatch = jest.fn();
      const favoriteOffersLoader = fetchFavoriteOffers();

      apiMock
        .onGet(APIRoute.FAVORITE)
        .reply(200, offers);

      return favoriteOffersLoader(dispatch,
        () => {
        }, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(1);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.LOAD_OFFERS,
            payload: [adaptToClient(offer)],
          });
        });
    });
  },
);

