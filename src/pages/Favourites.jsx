import React from 'react';
import { useFavourites } from '../FavouritesContext';
import Picture from '../components/Picture';
import '../assets/scss/pages/Favourites.scss';
import '../assets/scss/index.scss';

function Favourites() {
    const { getUserFavourites } = useFavourites();
    const favourites = getUserFavourites(); // Now calling the method

    // Safeguard to ensure favourites is always an array
    const safeFavourites = Array.isArray(favourites) ? favourites : [];

    return (
        <div id="favourites">
            <div className='favourites'>
                <h1 className='title'>Your Favourites</h1>
                <div className='favourites-container'>
                    {safeFavourites.map((picture, index) => (
                        <Picture key={index} src={picture.src} alt={picture.alt} tags={picture.tags} showFavouriteButton={false} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourites;
