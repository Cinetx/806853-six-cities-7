export const ActionType = {
  CITY_CHANGE: 'CITY_CHANGE',
  GET_OFFERS: 'GET_OFFERS',
};

export const ActionCreator = {
  cityChange: (currentCity) => ({
    type: ActionType.CITY_CHANGE,
    payload: currentCity,
  }),
};
