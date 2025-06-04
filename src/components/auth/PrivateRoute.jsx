import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
  // Puedes mejorar esto verificando expiración del token
  return !!localStorage.getItem('accessToken');
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
