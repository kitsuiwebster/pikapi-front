import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../js/auth';

// Note: This component is meant to be used inside the element prop of a Route
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
