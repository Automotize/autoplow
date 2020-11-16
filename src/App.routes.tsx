import React, { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

import Spinner from './components/Spinner';
const HomePage = lazy(() => import('./pages/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

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
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/contact" component={ContactPage} />
        <Route exact={true} path="/pricing" component={PricingPage} />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
