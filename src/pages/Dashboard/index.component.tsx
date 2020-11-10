import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, useLocation } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Spinner from '../../components/Spinner';

const DashboardHome = lazy(() => import('./pages/Dashboard.component'));

type Props = {
  match: {
    isExact: boolean;
    params: {};
    path: string;
    url: string;
  };
};

const Dashboard: React.FC<Props> = ({ match }) => {
  const location = useLocation();
  return (
    <section className="dashboard">
      <Sidebar />

      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={DashboardHome} />
      </Suspense>
    </section>
  );
};

export default Dashboard;
