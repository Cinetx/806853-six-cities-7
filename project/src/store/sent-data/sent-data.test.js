import {sentData} from './sent-data';
import {ActionType} from '../action';

describe('Reducer: sentData',
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
        expect(sentData(undefined, {})).toEqual(fakeInitialState);
      });

    it('comment send',
      () => {
        const state = {comment};
        const commentSendActions = {
          type: ActionType.LOAD_OFFERS,
          payload: comment,
        };
        expect(sentData(state, commentSendActions)).toEqual({comment});
      });
  },
);
