import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { url } from './index';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const { isAuthenticated, token } = useAuth();
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchUserFavourites = async () => {
            const userId = localStorage.getItem('userId'); 
            console.log(userId);
            if (token && userId) {
                try {
                    const response = await axios.get(`${url}/user/${userId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    setFavourites(response.data.user.favorites || []);
                } catch (error) {
                    console.error('Failed to fetch user favorites:', error);
                }
            }
        };

        if (isAuthenticated) {
            fetchUserFavourites();
        }
    }, [isAuthenticated, token]); 

    const addFavourite = async (pictureId) => {
        try {
            const response = await axios.post(`${url}/user/favorites/add`, { pictureId }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.data.success) {
                setFavourites(prev => [...prev, pictureId]);
            }
        } catch (error) {
            console.error('Failed to add favorite:', error);
        }
    };

    const removeFavourite = async (pictureId) => {
        try {
            const response = await axios.post(`${url}/user/favorites/remove`, { pictureId }, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (response.data.success) {
                setFavourites(prev => prev.filter(fav => fav !== pictureId));
            }
        } catch (error) {
            console.error('Failed to remove favorite:', error);
        }
    };

    const getUserFavourites = () => favourites;

    return (
        <FavouritesContext.Provider value={{ getUserFavourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouritesContext);
