import Types from 'MyTypes';
import { connect } from 'react-redux';
import { compose, Dispatch, bindActionCreators } from 'redux';

import { userActions } from '../../../redux/user';

import Google from './Google.component';

interface MyDispatchProps {
  oAuthStart: (name: string) => void;
}

const mapDispatchToProps = (
  dispatch: Dispatch<Types.RootAction>
): MyDispatchProps =>
  bindActionCreators(
    {
      oAuthStart: userActions.oAuthStart,
    },
    dispatch
  );

export default compose(connect(null, mapDispatchToProps))(Google);
