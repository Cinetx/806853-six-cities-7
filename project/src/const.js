export const AppRoute = {
  MAIN: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  ROOM: '/offer/:id',
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
    lat: 52.38333,
    lng: 4.9,
    zoom: 12,
  },
  {
    name: 'Paris',
    lat: 48.86471,
    lng: 2.3,
    zoom: 12,
  },
  {
    name: 'Cologne',
    lat: 50.93517,
    lng: 6.9,
    zoom: 12,
  },
  {
    name: 'Brussels',
    lat: 50.85045,
    lng: 4.3,
    zoom: 12,
  },

  {
    name: 'Hamburg',
    lat: 53.55108,
    lng: 9.9,
    zoom: 12,
  },
  {
    name: 'Dusseldorf',
    lat: 51.23333,
    lng: 6.7,
    zoom: 12,
  },
];
