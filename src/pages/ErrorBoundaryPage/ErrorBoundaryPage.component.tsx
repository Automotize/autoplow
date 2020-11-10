/* eslint-disable no-console */
import React from 'react';

import PropTypes from 'prop-types';

import errorImage from '../../assets/error.png';

type State = {
  hasErrored: boolean;
};

class ErrorBoundary extends React.Component {
  readonly state: State = {
    hasErrored: false,
  };

  static getDerivedStateFromError() {
    // if the app has hit an error, set the state
    return { hasErrored: true };
  }

  componentDidCatch(error: {}, info: {}) {
    // log the errors that have happened (can be disabled in production)
    // if (process.env.NODE_ENV === 'development') {
    console.log(error);
    console.log(info);
    // }
  }

  render() {
    const { children } = this.props;
    const { hasErrored } = this.state;
    // if app has errored, return the error page
    if (hasErrored) {
      return (
        <div className="error">
          <div className="error__text error__text--primary">
            Uh oh! Seems we ran into a problem!
          </div>
          <img src={errorImage} className="error__image" alt="Error" />
          <div className="error__text">
            This mug was a family heirloom. Of your neighbor. Your neighbor
            always loved the color, shape, and quantity of coffee held by this
            mug. But your neighbor moved out and left it on their porch, no
            explanation, no repair materials, no nothing. So you have this
            broken mug.
          </div>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
