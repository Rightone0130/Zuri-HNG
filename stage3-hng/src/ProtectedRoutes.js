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

    return null;
  }

  if (authenticated === false) {
  
    return <Navigate to="/rightpics/SignIn" replace state={{from: location}} />;
  }

  return  <Dashboard />;
}

export default ProtectedRoutes;
