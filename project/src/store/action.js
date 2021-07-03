export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
  SORT_TYPE_CHANGE: 'SORT_CHANGE',
  SORT_MENU_OPEN: 'SORT_MENU_OPEN',
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
};
