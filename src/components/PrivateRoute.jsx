import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Adjust the import path as necessary

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the context to check authentication

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
