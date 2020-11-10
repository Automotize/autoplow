export type UserType = Readonly<{
  userState: null | 'isLoading' | 'success' | 'failure';
  userData: null | {};
  userError: null | {};
}>;
