import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '../components/Picture';
import { useAlert } from 'react-alert';
import { useAuth } from '../AuthContext';
import '../assets/scss/pages/Browse.scss';
import '../assets/scss/index.scss';

function Browse() {
    const alert = useAlert();
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [pictures, setPictures] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { isAuthenticated, user, token } = useAuth(); // Assuming you manage token here
    const backendUrl = 'http://localhost:4001'; 

    useEffect(() => {
        const fetchPictures = async () => {
            try {
                const response = await axios.get(`${backendUrl}/pictures`);
                const updatedPictures = response.data.map(picture => ({
                    ...picture,
                    src: `${backendUrl}${picture.src.startsWith('/') ? '' : '/'}${picture.src.replace('./', '')}`,
                    // Assuming the backend sends a property that tells you if the picture is favorite
                    // You might need to adjust this depending on your backend response
                    isFavourite: picture.isFavourite || false,
                }));
                setPictures(updatedPictures);
                console.log(updatedPictures); // Add this line to check the structure of the fetched pictures
            } catch (error) {
                console.error('Failed to fetch pictures:', error);
            }
        };
    
        fetchPictures();
    }, []);
    

    const toggleFavourite = async (pictureId, isCurrentlyFavourite) => {
        if (!isAuthenticated) {
            setIsAlertOpen(true);
            alert.show('Please connect to add pictures to favourites.', {
                timeout: 5000,
                onOpen: () => {
                    setIsAlertOpen(true);
                },
            });
            return;
        }

        console.log("Token being used for request:", token);
    
        // Define the configuration for the axios request, including the authorization headers
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`, // Correctly formatted Authorization header
            },
        };
    
        // Define the endpoint based on whether we're adding or removing a favorite
        const endpoint = `${backendUrl}/user/favorites/${isCurrentlyFavourite ? 'remove' : 'add'}`;
    
        try {
            // Make a single post request to update the favorite status
            await axios.post(endpoint, { pictureId }, config);
    
            // Optimistically update the UI to reflect the new favorite status
            setPictures(pictures.map(pic => pic._id === pictureId ? {
                ...pic,
                isFavourite: !isCurrentlyFavourite,
            } : pic));
        } catch (error) {
            console.error('Failed to toggle favourite:', error);
            alert.show('Failed to update favourite status.', {
                timeout: 5000,
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
                            isAlertOpen={isAlertOpen} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Browse;
