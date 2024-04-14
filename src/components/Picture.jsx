import React from 'react';
import filledHeart from '../assets/images/filled-heart.png';
import emptyHeart from '../assets/images/empty-heart.png';
import downloadIcon from '../assets/images/download.png';
import '../assets/scss/components/Picture.scss';

function Picture({
  src,
  alt,
  onFavourite,
  isFavourite,
  showFavouriteButton = true,
  onDownload,
  showDownloadButton = true 
}) {
  return (
    <div className="picture">
      <img className="picture-img" alt={alt} src={src} />
      {showFavouriteButton && (
        <button onClick={onFavourite} className="picture-like-button">
          {isFavourite ? (
            <img className='picture-heart' src={filledHeart} alt="Filled heart" />
          ) : (
            <img className='picture-heart' src={emptyHeart} alt="Empty heart" />
          )}
        </button>
      )}
      {showDownloadButton && (
        <button onClick={onDownload} className="picture-download-button">
          <img src={downloadIcon} alt="Download" />
        </button>
      )}
    </div>
  );
}

export default Picture;
