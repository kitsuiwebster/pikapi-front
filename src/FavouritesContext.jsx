import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [favourites, setFavourites] = useState(() => {
        // Fetch the initial state of favourites from localStorage for the current user
        const userIdentifier = localStorage.getItem('username');
        const savedFavourites = localStorage.getItem('favourites');
        const parsedFavourites = savedFavourites ? JSON.parse(savedFavourites) : {};
        return parsedFavourites[userIdentifier] || [];
    });

    useEffect(() => {
        if (!isAuthenticated || !localStorage.getItem('username')) return;

        // Save the current user's favourites back to localStorage on changes
        const userIdentifier = localStorage.getItem('username');
        const allFavourites = JSON.parse(localStorage.getItem('favourites')) || {};
        allFavourites[userIdentifier] = favourites;
        localStorage.setItem('favourites', JSON.stringify(allFavourites));
    }, [favourites, isAuthenticated]);

    const addFavourite = (picture) => {
        const userIdentifier = localStorage.getItem('username');
        if (!userIdentifier) return;

        // Ensure that we're working with an array for the current user's favourites
        const currentFavourites = Array.isArray(favourites) ? favourites : [];
        const isAlreadyFavourite = currentFavourites.some(fav => fav.src === picture.src);

        // Update the favourites accordingly
        const updatedFavourites = isAlreadyFavourite
            ? currentFavourites.filter(fav => fav.src !== picture.src) // Remove if already a favourite
            : [...currentFavourites, picture]; // Add if not already a favourite

        // Save the updated favourites back to localStorage
        const allFavourites = JSON.parse(localStorage.getItem('favourites')) || {};
        allFavourites[userIdentifier] = updatedFavourites;
        localStorage.setItem('favourites', JSON.stringify(allFavourites));
        setFavourites(updatedFavourites);
    };

    const removeFavourite = (src) => {
        const userIdentifier = localStorage.getItem('username');
        const currentFavourites = Array.isArray(favourites) ? favourites : [];
        const updatedFavourites = currentFavourites.filter(picture => picture.src !== src);

        // Update the localStorage as well
        const allFavourites = JSON.parse(localStorage.getItem('favourites')) || {};
        allFavourites[userIdentifier] = updatedFavourites;
        localStorage.setItem('favourites', JSON.stringify(allFavourites));
        
        setFavourites(updatedFavourites);
    };

    const getUserFavourites = () => {
        const userIdentifier = localStorage.getItem('username');
        const savedFavourites = localStorage.getItem('favourites');
        const allFavourites = savedFavourites ? JSON.parse(savedFavourites) : {};
        return allFavourites[userIdentifier] || []; // Ensure it's always an array
    };
    
    return (
        <FavouritesContext.Provider value={{ getUserFavourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouritesContext);
