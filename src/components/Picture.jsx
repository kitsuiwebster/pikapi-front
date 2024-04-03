import React from 'react';
import '../assets/scss/components/Picture.scss';
import filledHeart from '../assets/images/filled-heart.png';
import emptyHeart from '../assets/images/empty-heart.png';
import downloadIcon from '../assets/images/download.png';

function Picture({ src, alt, onFavourite, isFavourite, showFavouriteButton = true, onDownload, downloadLink, isAlertOpen }) {
  return (
    <div className="picture">
      <img className="picture-img" alt={alt} src={src} />
      {showFavouriteButton && (
        <button onClick={onFavourite} disabled={isAlertOpen} className="picture-like-button">
          {isFavourite ? <img className='picture-heart' src={filledHeart} alt="filled heart" /> : <img className='picture-heart' src={emptyHeart} alt="empty heart" />}
        </button>
      )}
      {downloadLink && (
        <a href={downloadLink} download onClick={onDownload} className="picture-download-button">
            <img src={downloadIcon} className='picture-download' alt="light download" />
        </a>
      )}
    </div>
  );
}

export default Picture;
