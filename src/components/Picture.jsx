import React from 'react';
import '../assets/scss/components/Picture.scss';
import filledHeart from '../assets/images/filled-heart.png';
import emptyHeart from '../assets/images/empty-heart.png';

function Picture({ src, alt, onFavourite, isFavourite, showFavouriteButton = true }) {
    return (
        <div className="picture">
            <img className="picture-img" alt={alt} src={src} />
            {showFavouriteButton && (
                <button onClick={onFavourite} className="picture-button">
                    {isFavourite ? <img className='picture-heart' src={filledHeart} alt="filled heart" /> : <img
                    className='picture-heart' src={emptyHeart} alt="empty heart" />}
                </button>
            )}
        </div>
    );
}

export default Picture;
