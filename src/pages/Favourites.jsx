import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '../components/Picture';
import { useAuth } from '../AuthContext'; // Make sure to import useAuth if it's not already
import '../assets/scss/pages/Favourites.scss';
import '../assets/scss/index.scss';

function Favourites() {
    const { isAuthenticated, token } = useAuth(); // Assuming useAuth provides isAuthenticated and token
    const [favourites, setFavourites] = useState([]);
    const backendUrl = 'http://localhost:4001';

    useEffect(() => {
        const fetchUserFavourites = async () => {
            if (isAuthenticated) {
                try {
                    const response = await axios.get(`${backendUrl}/user/favorites`, {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    // Assuming the backend returns an array of favorite pictures
                    setFavourites(response.data.map(picture => ({
                        ...picture,
                        src: `${backendUrl}${picture.src.startsWith('/') ? '' : '/'}${picture.src.replace('./', '')}`,
                        // If your backend directly flags pictures as favorites, you may not need to adjust this
                        isFavourite: true,
                    })));
                } catch (error) {
                    console.error('Failed to fetch favorites:', error);
                }
            } else {
                setFavourites([]); // Clear favorites if not authenticated
            }
        };

        fetchUserFavourites();
    }, [isAuthenticated, token]);

    // Define your onDownload function here
    const onDownload = () => {
        // Handle download here
    };

    return (
        <div id="favourites">
            <div className='favourites'>
                <h1 className='title'>Your Favourites</h1>
                <div className='favourites-container'>
                    {favourites.map((picture, index) => (
                        <Picture 
                            key={index} 
                            src={picture.src} 
                            alt={picture.alt} 
                            tags={picture.tags} 
                            showFavouriteButton={false} 
                            onFavourite={() => {}} // You can pass an empty function or adjust as needed
                            isFavourite={true} // Since these are favorites, this can be statically true
                            downloadLink={picture.downloadLink} 
                            onDownload={onDownload} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourites;
