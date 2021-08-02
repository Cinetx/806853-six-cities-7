import {
  ActionType,
  changeOfferFavoriteStatus,
  cityChange,
  commentSend,
  loadOffers,
  loadReviews,
  loadSelectOffer,
  loginUser,
  logoutUser,
  redirectToRoute,
  requireAuthorization,
  showActiveOffer,
  sortMenuOpen,
  sortTypeChange
} from './action';

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

const city = {
  name: 'Paris',
  location: {
    lat: 48.86471,
    lng: 2.3,
    zoom: 12,
  },
};

const comment = {
  comment: 'test comment',
  rating: 1,
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

const user = {
  id: 1,
  email: 'fakemail@gmail.com',
  name: 'fakeName',
  token: 'fakeToken',
  avatarUrl: 'fakeUrl.img',
  isPro: false,
};

const fakeAuthorizationStatus = 'AUTH';

const fakeRoute = '/';

const fakeSortType = 'Popular';

describe('Actions', () => {
  it('action creator for change favorite status offer',
    () => {
      const expectedAction = {
        type: ActionType.FAVORITE_STATUS_CHANGE,
        payload: offer.id,
      };
      expect(changeOfferFavoriteStatus(offer.id)).toEqual(expectedAction);
    });

  it('action creator for change city on main page',
    () => {
      const expectedAction = {
        type: ActionType.CITY_CHANGE,
        payload: city,
      };
      expect(cityChange(city)).toEqual(expectedAction);
    });

  it('action creator for comment send',
    () => {
      const expectedAction = {
        type: ActionType.COMMENT_SEND,
        payload: comment,
      };
      expect(commentSend(comment)).toEqual(expectedAction);
    });

  it('action creator for loading offers',
    () => {
      const expectedAction = {
        type: ActionType.LOAD_OFFERS,
        payload: offers,
      };
      expect(loadOffers(offers)).toEqual(expectedAction);
    });

  it('action creator for loading reviews',
    () => {
      const expectedAction = {
        type: ActionType.LOAD_REVIEWS,
        payload: reviews,
      };
      expect(loadReviews(reviews)).toEqual(expectedAction);
    });

  it('action creator for loading selected offer on Room-screen',
    () => {
      const expectedAction = {
        type: ActionType.SELECT_OFFER,
        payload: offer,
      };
      expect(loadSelectOffer(offer)).toEqual(expectedAction);
    });

  it('action creator for user login',
    () => {
      const expectedAction = {
        type: ActionType.LOGIN,
        payload: user,
      };
      expect(loginUser(user)).toEqual(expectedAction);
    });

  it('action creator for logout',
    () => {
      const expectedAction = {
        type: ActionType.LOGOUT,
      };
      expect(logoutUser()).toEqual(expectedAction);
    });

  it('action creator for redirect',
    () => {
      const expectedAction = {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: '/',
      };
      expect(redirectToRoute(fakeRoute)).toEqual(expectedAction);
    });

  it('action creator for require authorization status',
    () => {
      const expectedAction = {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: fakeAuthorizationStatus,
      };
      expect(requireAuthorization(fakeAuthorizationStatus)).toEqual(expectedAction);
    });

  it('action creator for show active offer on map',
    () => {
      const expectedAction = {
        type: ActionType.ACTIVE_OFFER,
        payload: offer.id,
      };
      expect(showActiveOffer(offer.id)).toEqual(expectedAction);
    });

  it('action creator for sorting menu open',
    () => {
      const expectedAction = {
        type: ActionType.SORT_MENU_OPEN,
        payload: false,
      };
      expect(sortMenuOpen(false)).toEqual(expectedAction);
    });

  it('action creator for sortig offer',
    () => {
      const expectedAction = {
        type: ActionType.SORT_TYPE_CHANGE,
        payload: fakeSortType,
      };
      expect(sortTypeChange(fakeSortType)).toEqual(expectedAction);
    });
});
