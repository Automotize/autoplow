import { action } from 'typesafe-actions';

import UserActionTypes from './user.constants';

// Used during /me request (checks if jwt is valid)
export const checkUserSession = () =>
  action(UserActionTypes.CHECK_USER_SESSION, {});

export const noUserSession = () => ({
  type: UserActionTypes.NO_USER_SESSION,
});

// EMAIL AND PASSWORD AUTHENTICATION
export const signInStart = (emailAndPassword: string) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: {}) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error: {}) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

// EMAIL AND PASSWORD REGISTRATION
export const signUpStart = (userInfo: {}) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userInfo,
});
export const signUpSuccess = (data: {}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});
export const signUpFailure = (error: {}) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

// OAUTH AUTHENTICATION
export const oAuthStart = (provider: string) =>
  action(UserActionTypes.CHECK_USER_SESSION, { provider });

export const oAuthSuccess = (user: {}) => ({
  type: UserActionTypes.OAUTH_SUCCESS,
  payload: user,
});
export const oAuthFailure = (error: {}) => ({
  type: UserActionTypes.OAUTH_FAILURE,
  payload: error,
});

// REMOVES JWT TOKEN
export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error: {}) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

// Clears authentication errors during component unmount
export const clearUserErrors = () => ({
  type: UserActionTypes.CLEAR_USER_ERRORS,
});

export const openModal = (form: {}) => ({
  type: UserActionTypes.OPEN_MODAL,
  payload: form,
});
export const changeModal = (form: {}) => ({
  type: UserActionTypes.CHANGE_MODAL,
  payload: form,
});

export const closeModal = () => ({
  type: UserActionTypes.CLOSE_MODAL,
});
