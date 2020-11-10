import React from 'react';

// import react router components

// importing general components (these components are necessary on every page)
// import Header from './layout/Header';
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
        {/* Modal will be displayed on every page */}
        {/* <Modal /> */}
        {/* Header will be displayed on every page */}
        {/* <Header /> */}

        <AppRoutes match={match} />

        {/* Footer will be displayed on every page */}
        {/* <Footer /> */}
      </>
    );
  }
}

export default App;
