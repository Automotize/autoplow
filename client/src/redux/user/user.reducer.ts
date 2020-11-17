import UserActionTypes from './user.constants';
import { ActionType } from 'typesafe-actions';
import { UserType } from './user.model';
import * as actions from './user.actions';

export type UserAction = ActionType<typeof actions>;

const INITIAL_STATE: UserType = {
  userState: null,
  userData: null,
  userError: null,
};

export default (state = INITIAL_STATE, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        userState: 'success',
        userError: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        userData: null,
        userState: 'noUserSession',
        userError: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        userData: null,
        userState: 'failure',
        userError: action.payload,
      };
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_UP_START:
    case UserActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        userData: null,
        userState: 'isLoading',
        userError: null,
      };
    case UserActionTypes.NO_USER_SESSION:
      return {
        ...state,
        userData: null,
        userState: 'noUserSession',
        userError: null,
      };
    default:
      return state;
  }
};
