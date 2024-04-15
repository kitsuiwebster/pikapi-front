import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '../components/Picture';
import { useAlert } from 'react-alert';
import { useAuth } from '../AuthContext';
import '../assets/scss/pages/Browse.scss';
import { url } from '../index';



function Browse() {
    const alert = useAlert();
    const { isAuthenticated, token } = useAuth();
    const [pictures, setPictures] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(url);

    useEffect(() => {
        const fetchUserFavourites = async () => {
            const userId = localStorage.getItem('userId');
            if (token && userId) {
                try {
                    const response = await axios.get(`${url}/user/${userId}`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    return response.data.user.favorites || [];
                } catch (error) {
                    console.error('Failed to fetch user favorites:', error);
                    return [];
                }
            }
            return [];
        };

        const fetchPictures = async () => {
            try {
                const userFavourites = await fetchUserFavourites();
                const response = await axios.get(`${url}/pictures`);
                const updatedPictures = response.data.map(picture => ({
                    ...picture,
                    src: `${url}${picture.src.startsWith('/') ? '' : '/'}${picture.src.replace('./', '')}`,
                    isFavourite: userFavourites.includes(picture._id),
                }));
                setPictures(updatedPictures);
            } catch (error) {
                console.error('Failed to fetch pictures:', error);
            }
        };

        fetchPictures();
    }, [isAuthenticated, token]);

    const toggleFavourite = async (pictureId, isCurrentlyFavourite) => {
        if (!isAuthenticated) {
            alert.show('Please connect to add pictures to favourites.', { timeout: 5000, type: 'error' });
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        };

        const endpoint = `${url}/user/favorites/${isCurrentlyFavourite ? 'remove' : 'add'}`;

        try {
            await axios.post(endpoint, { pictureId }, config);
            setPictures(pictures.map(pic => pic._id === pictureId ? {
                ...pic,
                isFavourite: !isCurrentlyFavourite,
            } : pic));
            alert.show(`Favorite ${isCurrentlyFavourite ? 'removed' : 'added'} successfully.`, {
                timeout: 3000,
                type: 'success'
            });
        } catch (error) {
            console.error('Failed to toggle favourite:', error);
            alert.show(`Failed to ${isCurrentlyFavourite ? 'remove' : 'add'} favorite.`, {
                timeout: 5000,
                type: 'error'
            });
        }
    };

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
                    {pictures.filter(picture =>
                        picture.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                    ).map((picture, index) => (
                        <Picture
                            key={index}
                            src={picture.src}
                            alt={picture.alt}
                            tags={picture.tags}
                            isFavourite={picture.isFavourite}
                            onFavourite={() => toggleFavourite(picture._id, picture.isFavourite)}
                            showDownloadButton={false}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Browse;
