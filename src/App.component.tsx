import React from 'react';

// import react router components

// importing general components (these components are necessary on every page)
import { SimpleHeader } from './layout/Header';
import { SocialsOnly } from './layout/Footer';

// import Footer from './layout/Footer';

// import Modal from './components/Modal';

import AppRoutes from './App.routes';

interface PropsType {
  checkUserSessionFunc: () => void;
  match: {
    isExact: boolean;
    params: {};
    path: string;
    url: string;
  };
  id?: any;
  key?: any;
  ref?: any;
}

interface StateType {}

export class App extends React.Component<PropsType, StateType> {
  // when component mounts check user session
  componentDidMount() {
    const { checkUserSessionFunc } = this.props;
    checkUserSessionFunc();
  }
  // static propTypes = propTypes;

  render() {
    const { match } = this.props;
    return (
      <>
        <div className="page">
          <SimpleHeader />

          <AppRoutes match={match} />

          <SocialsOnly />
        </div>
      </>
    );
  }
}

export default App;
