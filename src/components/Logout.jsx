import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout as logoutFn } from '../js/auth'; // Adjust the import path as necessary
import { useAuth } from '../AuthContext'; // Adjust the import path as necessary

const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(useAuth);

  useEffect(() => {
    logoutFn(); // This clears the JWT token from localStorage
    setIsAuthenticated(false); // Update authentication state
    navigate('/login');
  }, [navigate, setIsAuthenticated]);

  return null; // Since we're redirecting, no need to return actual JSX
};

export default Logout;
