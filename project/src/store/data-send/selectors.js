import {NameSpace} from '../root-reducer';

export const getComment = (state) => state[NameSpace.SENT_DATA].comment;
export const getIsCommentSendSuccess = (state) => state[NameSpace.SENT_DATA].isCommentSendSuccess;
export const getIsCommentSendError = (state) => state[NameSpace.SENT_DATA].isCommentSendError;
export const getIsCommentSending = (state) => state[NameSpace.SENT_DATA].isCommentSending;
