export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  OFFERS: '/hotels',
  NEARBY: '/hotels/:hotel_id/nearby',
  FAVORITE: '/favorite',
  REVIEWS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const DEFAULT_CITY = {
  name: 'Paris',
  lat: 48.86471,
  lng: 2.3,
  zoom: 12,
};

export const DEFAULT_SORT = 'Popular';

export const SORT_TYPE = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const SORT_BY = [
  {
    type: 'Popular',
  },
  {
    type: 'Price: low to high',
  },
  {
    type: 'Price: high to low',
  },
  {
    type: 'Top rated first',
  },
];

export const CITY = [
  {
    name: 'Amsterdam',
    lat: 52.37454,
    lng: 4.897976,
    zoom: 13,
  },
  {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 13,
  },
  {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 13,
  },
  {
    name: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 13,
  },

  {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 13,
  },
  {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 13,
  },
];
