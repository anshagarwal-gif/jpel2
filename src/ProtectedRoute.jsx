import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = sessionStorage.getItem('token') !== null;
  return isAuthenticated ? element : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
