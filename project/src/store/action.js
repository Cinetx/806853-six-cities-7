export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
  SORT_CHANGE: 'SORT_CHANGE',
};

export const ActionCreator = {
  cityChange: (currentCity) => ({
    type: ActionType.CITY_CHANGE,
    payload: currentCity,
  }),

  sortChange: (sortType) => ({
    type: ActionType.SORT_CHANGE,
    payload: sortType,
  }),
};
