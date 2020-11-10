import Types from 'MyTypes';
import { connect } from 'react-redux';
import { compose, Dispatch, bindActionCreators } from 'redux';

import { userActions } from './redux/user';

import { App } from './App.component';

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) =>
  bindActionCreators(
    {
      checkUserSession: userActions.checkUserSession,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(App);
