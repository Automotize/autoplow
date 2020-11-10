import { createSelector } from 'reselect';

type userReducer = Readonly<{
  user: {
    userState: null | 'isLoading' | 'success' | 'failure';
    userData: null | {};
    userError: null | {};
  };
}>;

const selectUser = (state: userReducer) => state.user;

export const selectUserData = createSelector(
  [selectUser],
  (user) => user.userData
);
export const selectUserState = createSelector(
  [selectUser],
  (user) => user.userState
);
export const selectUserError = createSelector(
  [selectUser],
  (user) => user.userError
);
