import { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthContext } from './useAuthContext';
import AuthCoverLayout from '../layouts/auth/cover';
//
import LoginCoverPage from '../pages/auth/login-cover';
import LoadingScreen from "../components/loading-screen";
// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const { isAuthenticated, isInitialized } = useAuthContext();
  console.log('isauthen',isAuthenticated)

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return (
   
      <AuthCoverLayout
        title="Hi, Welcome Back"
        images={[
          '/assets/images/travel/hospital-building.jpg',
          '/assets/images/travel/hospitalimg.jpg',
        ]}
      >
        <LoginCoverPage />
      </AuthCoverLayout>
   
    );
   
    // <Login />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <> {children}</>;
}
