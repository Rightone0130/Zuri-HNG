import React, { useEffect, useState } from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import Dashboard from './components/dashboard/Dashboard';

function ProtectedRoutes({ element, ...rest }) {
  const [authenticated, setAuthenticated] = useState(null);
   const location = useLocation()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  if (authenticated === null) {
    // Still waiting for authentication state, you can render a loading spinner or message here
    return null;
  }

  if (authenticated === false) {
    // User is not authenticated, redirect to the sign-in page
    return <Navigate to="/rightpics/SignIn" replace state={{from: location}} />;
  }

  // User is authenticated, render the protected route
  return  <Dashboard/>;
}

export default ProtectedRoutes;
