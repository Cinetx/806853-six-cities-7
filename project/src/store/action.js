export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
  SORT_TYPE_CHANGE: 'SORT_CHANGE',
  SORT_MENU_OPEN: 'SORT_MENU_OPEN',
  ACTIVE_OFFER: 'ACTIVE_OFFER',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  cityChange: (currentCity) => ({
    type: ActionType.CITY_CHANGE,
    payload: currentCity,
  }),

  sortTypeChange: (sortType) => ({
    type: ActionType.SORT_TYPE_CHANGE,
    payload: sortType,
  }),

  sortMenuOpen: (menu) => ({
    type: ActionType.SORT_MENU_OPEN,
    payload: menu,
  }),

  getActiveOffer: (id) => ({
    type: ActionType.ACTIVE_OFFER,
    payload: id,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
