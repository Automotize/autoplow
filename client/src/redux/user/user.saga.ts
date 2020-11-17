import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.constants';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  oAuthStart,
  noUserSession,
  signUpSuccess,
  signUpFailure,
} from './user.actions';

import { userRegister, userLogin, checkAuth, oAuthAPI } from './user.api';

import { setToken, removeToken, fetchToken } from './user.utils';
import { types } from 'util';
import { AnyAction } from 'redux';

// action gets passed it

export function* oAuth({ payload: { provider, response } }: AnyAction) {
  try {
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: 'application/json' }
    );
    const {
      data: {
        data: { user },
        token,
      },
    } = yield oAuthAPI(provider, tokenBlob);
    yield put(signInSuccess(user));
    // yield setToken(token);
  } catch (error) {
    yield put(signInFailure(error.response.data));
  }
}

export function* onOAuthStart() {
  yield takeLatest(UserActionTypes.OAUTH_START, oAuth);
}

// action gets passed it
export function* signIn({ payload: { email, password } }: AnyAction) {
  try {
    const {
      data: {
        data: { user },
        token,
      },
    } = yield userLogin(email, password);
    yield put(signInSuccess(user));
    yield setToken(token);
  } catch (error) {
    yield put(signInFailure(error.response.data));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield fetchToken();
    if (userAuth === undefined) {
      yield put(noUserSession());
    } else {
      const {
        data: {
          data: { doc },
        },
      } = yield checkAuth(userAuth);
      yield put(signInSuccess(doc[0]));
    }
  } catch (error) {
    yield put(signInFailure(error));
    //AND DON'T FORGET TO UNCOMMENT THE CODE BELOW
    yield removeToken();
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield removeToken();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signInAfterSignUp({ payload: { user, token } }: AnyAction) {
  try {
    yield put(signInSuccess(user));
    // yield setToken(token);
  } catch (error) {
    yield put(signInFailure(error.response.data));
  }
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signUp({
  payload: { username, email, password, passwordConfirm },
}: AnyAction) {
  try {
    const {
      data: {
        data: { user },
        token,
      },
    } = yield userRegister(username, email, password, passwordConfirm);
    yield put(signUpSuccess({ user, token }));
  } catch (error) {
    yield put(signUpFailure(error.response.data));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* userSagas() {
  yield all([
    call(onOAuthStart),
    call(onSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}

export default userSagas;
