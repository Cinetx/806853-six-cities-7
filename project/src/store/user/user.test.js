import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus, DEFAULT_USER} from '../../const';

describe('Reducer: user',
  () => {
    const fakeInitialState = {
      authorizationStatus: AuthorizationStatus.UNKNOWN,
      user: {
        id: null,
        name: '',
        token: '',
        isPro: false,
        email: '',
        avatarUrl: '',
      },
    };

    const fakeUser = {
      id: 1,
      email: 'fakemail@gmail.com',
      name: 'fakeName',
      token: 'fakeToken',
      avatarUrl: 'fakeUrl.img',
      isPro: false,
    };

    const fakeAuthorizationStatus = 'AUTH';

    it('without additional parameters should return initial state',
      () => {
        expect(user(undefined, {})).toEqual(fakeInitialState);
      });

    it('require authorization',
      () => {
        const state = {authorizationStatus: 'AUTH'};
        const requireAuthorizationActions = {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: fakeAuthorizationStatus,
        };
        expect(user(state, requireAuthorizationActions)).toEqual({authorizationStatus: fakeAuthorizationStatus});
      });

    it('user login',
      () => {
        const state = {
          user: {
            id: null,
            name: '',
            token: '',
            isPro: false,
            email: '',
            avatarUrl: '',
          },
        };
        const loginUserActions = {
          type: ActionType.LOGIN,
          payload: fakeUser,
        };
        expect(user(state, loginUserActions)).toEqual({user: fakeUser});
      });

    it('user logout',
      () => {
        const state = {
          authorizationStatus: 'NO_AUTH',
          user: {
            id: null,
            name: '',
            token: '',
            isPro: false,
            email: '',
            avatarUrl: '',
          },
        };
        const logoutUserActions = {
          type: ActionType.LOGOUT,
          payload: 'NO_AUTH',
        };
        expect(user(state, logoutUserActions)).toEqual({authorizationStatus: 'NO_AUTH', user: DEFAULT_USER});
      });
  },
);
