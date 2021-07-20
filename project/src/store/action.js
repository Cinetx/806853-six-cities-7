export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
  SORT_TYPE_CHANGE: 'SORT_CHANGE',
  SORT_MENU_OPEN: 'SORT_MENU_OPEN',
  ACTIVE_OFFER: 'ACTIVE_OFFER',
  SELECT_OFFER: 'SELECT_OFFER',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_REVIEWS: 'data/loadReviews',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGIN: 'LOGIN',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  COMMENT_SEND: 'COMMENT_CHANGE',
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
    payload: Number(id),
  }),

  selectOffer: (offer) => ({
    type: ActionType.SELECT_OFFER,
    payload: offer,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  login: (email) => ({
    type: ActionType.LOGIN,
    payload: email,
  }),

  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  commentSend: (comment) => ({
    type: ActionType.COMMENT_SEND,
    payload: comment,
  }),
};
