import React, { createContext, useContext, useState, useEffect } from 'react';
import { isAuthenticated as checkAuth } from './js/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());
    const [token, setToken] = useState(localStorage.getItem('token') || ''); 

    useEffect(() => {
        setIsAuthenticated(checkAuth());
        setToken(localStorage.getItem('token'));
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken }}> 
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
