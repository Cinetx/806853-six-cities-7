import {NameSpace} from '../root-reducer';

export const getComment = (state) => state[NameSpace.DATA_SEND].comment;
export const getIsCommentSendSuccess = (state) => state[NameSpace.DATA_SEND].isCommentSendSuccess;
export const getIsCommentSendError = (state) => state[NameSpace.DATA_SEND].isCommentSendError;
export const getIsCommentSending = (state) => state[NameSpace.DATA_SEND].isCommentSending;
