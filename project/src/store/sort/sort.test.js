import {sort} from './sort';
import {ActionType} from '../action';
import {DEFAULT_SORT} from '../../const';

describe('Reducer: sort',
  () => {
    const fakeInitialState = {
      sortType: DEFAULT_SORT,
      sortMenuIsOpen: false,
    };

    const fakeSortType = 'Popular';

    it('without additional parameters should return initial state',
      () => {
        expect(sort(undefined, {})).toEqual(fakeInitialState);
      });

    it('sort change',
      () => {
        const state = {sortType: fakeSortType};
        const sortTypeChangeActions = {
          type: ActionType.SORT_TYPE_CHANGE,
          payload: fakeSortType,
        };
        expect(sort(state, sortTypeChangeActions)).toEqual({sortType: fakeSortType});
      });

    it('sort menu open',
      () => {
        const state = {sortMenuIsOpen: false};
        const sortMenuOpenActions = {
          type: ActionType.SORT_MENU_OPEN,
          payload: false,
        };
        expect(sort(state, sortMenuOpenActions)).toEqual({sortMenuIsOpen: false});
      });
  },
);
