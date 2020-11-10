import React, { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

// import {
//   ProtectedRoute,
//   UnprotectedRoute,
// } from "./components/ConditionalRoute";

import Spinner from './components/Spinner';

import HomePage from './pages/HeadersPage';

interface Props {
  match: {
    isExact: boolean;
    params: {};
    path: string;
    url: string;
  };
}

const AppRoutes: React.FC<Props> = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
