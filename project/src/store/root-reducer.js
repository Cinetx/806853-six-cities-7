import {combineReducers} from 'redux';
import {sort} from './sort/sort';
import {dataLoaded} from './data-loaded/data-loaded';
import {user} from './user/user';
import {dataSend} from './data-send/data-send';

export const NameSpace = {
  DATA_LOADED: 'DATA_LOADED',
  DATA_SEND: 'DATA_SEND',
  USER: 'USER',
  SORT: 'SORT',
};

export default combineReducers({
  [NameSpace.DATA_LOADED]: dataLoaded,
  [NameSpace.DATA_SEND]: dataSend,
  [NameSpace.USER]: user,
  [NameSpace.SORT]: sort,
});
