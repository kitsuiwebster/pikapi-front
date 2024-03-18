import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  localStorage.removeItem('jwtToken');
  return <Navigate to="/login" />;
};

export default Logout;
