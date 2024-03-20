import React, { useState } from 'react';
import '../assets/scss/pages/Browse.scss';
import '../assets/scss/index.scss';
import Picture from '../components/Picture';
import { useFavourites } from '../FavouritesContext';
import { useAlert } from 'react-alert';
import picturesData from '../js/pictures';
import { useAuth } from '../AuthContext';


function Browse() {
  const alert = useAlert();
  const [pictures] = useState(picturesData);
  const { getUserFavourites, addFavourite } = useFavourites();
  const [searchTerm, setSearchTerm] = useState('');

  const favourites = Array.isArray(getUserFavourites()) ? getUserFavourites() : [];

  const filteredPictures = pictures.filter(picture =>
    picture.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ).map(picture => ({
    ...picture,
    isFavourite: Array.isArray(favourites) && favourites.some(fav => fav.src === picture.src),
  }));

  const { isAuthenticated } = useAuth();

  return (
    <div id="browse">
      <div className='browse'>
        <h1 className='title'>Browse Pictures</h1>
        <input
          className='input'
          type="text"
          placeholder="Search by tag..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <div className='browse-container'>
          {filteredPictures.map((picture, index) => (
            <Picture
              key={index}
              src={picture.src}
              alt={picture.alt}
              tags={picture.tags}
              isFavourite={picture.isFavourite}
              onFavourite={() => {
                if (!isAuthenticated) {
                  alert.show('Please connect to add pictures to favourites.');
                } else {
                  addFavourite(picture);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
