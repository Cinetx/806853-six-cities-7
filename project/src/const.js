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

export const DEFAULT_SORT = 'POPULAR';

export const SORT_TYPE = {
  POPULAR: 'POPULAR',
  PRICE_LOW_TO_HIGH: 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW: 'PRICE_HIGH_TO_LOW',
  TOP_RATED: 'TOP_RATED',
};

export const SORT_BY = [
  {
    type: 'POPULAR',
    markup: 'Popular',
  },
  {
    markup: 'Price: low to high',
    type: 'PRICE_LOW_TO_HIGH',
  },
  {
    markup: 'Price: high to low',
    type: 'PRICE_HIGH_TO_LOW',
  },
  {
    type: 'TOP_RATED',
    markup: 'Top rated first',
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
