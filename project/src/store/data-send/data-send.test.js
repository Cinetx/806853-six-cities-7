import {dataSend} from './data-send';
import {ActionType} from '../action';

describe('Reducer: dataSend',
  () => {
    const fakeInitialState = {
      comment: {
        comment: '',
        rating: null,
      },
      isCommentSendSuccess: false,
      isCommentSendError: false,
      isCommentSending: false,
    };

    const comment = {
      comment: 'test comment',
      rating: 1,
    };

    it('without additional parameters should return initial state',
      () => {
        expect(dataSend(undefined, {})).toEqual(fakeInitialState);
      });

    it('comment send',
      () => {
        const state = {comment};
        const commentSendActions = {
          type: ActionType.LOAD_OFFERS,
          payload: comment,
        };
        expect(dataSend(state, commentSendActions)).toEqual({comment});
      });
  },
);
