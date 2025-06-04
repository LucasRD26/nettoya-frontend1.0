import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

const PrivateRoute = () => {
  const { token } = useAuthContext();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
