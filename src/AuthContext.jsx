import React, { createContext, useContext, useState, useEffect } from 'react';
import { isAuthenticated as checkAuth } from './js/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());

    useEffect(() => {
        setIsAuthenticated(checkAuth());
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
