import React, { lazy, Suspense } from 'react';

import { Route, Switch } from 'react-router-dom';

// import {
//   ProtectedRoute,
//   UnprotectedRoute,
// } from "./components/ConditionalRoute";

import Spinner from './components/Spinner';

// import error-boundary to allow unexpected errors to look better during production
// import ErrorBoundary from "./pages/ErrorBoundaryPage";

// importing all pages using lazy to chunk all pages
// const HomePage = lazy(() => import('./pages/HomePage'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));
// const ForgotPassword = lazy(() => import('./pages/ForgotPasswordPage'));
// const ResetPassword = lazy(() => import('./pages/ResetPasswordPage'));
// const Contact = lazy(() => import('./pages/ContactPage'));
// const EmailVerification = lazy(() => import('./pages/EmailVerificationPage'));
// const { Login1 } = lazy(() => import('./pages/Login'));
import HomePage from './pages/HeadersPage';
// const Register = lazy(() => import('./pages/RegisterPage'));

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
