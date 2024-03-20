import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout as logoutFn } from '../js/auth';
import { useAuth } from '../AuthContext';

const Logout = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(useAuth);

  useEffect(() => {
    logoutFn(); 
    setIsAuthenticated(false); 
    navigate('/login');
  }, [navigate, setIsAuthenticated]);

  return null; 
};

export default Logout;
