import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Picture from '../components/Picture';
import DownloadModal from '../components/DownloadModal'; // Import the modal component
import { useAuth } from '../AuthContext';
import '../assets/scss/pages/Favourites.scss';
import nofav from '../assets/images/nofav.png'; // Make sure the path is correct
import { url } from '../index';

function Favourites() {
    const { isAuthenticated, token } = useAuth();
    const [favourites, setFavourites] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPicture, setSelectedPicture] = useState(null); // State to keep track of selected picture for download
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    useEffect(() => {
        const fetchFavourites = async () => {
            if (isAuthenticated) {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    try {
                        const userResponse = await axios.get(`${url}/user/${userId}`, {
                            headers: { Authorization: `Bearer ${token}` },
                        });
                        const favouriteIds = userResponse.data.user.favorites || [];

                        if (favouriteIds.length === 0) {
                            setFavourites([]);
                        } else {
                            const picturesResponse = await axios.get(`${url}/pictures`, {
                                headers: { Authorization: `Bearer ${token}` },
                            });
                            const filteredFavourites = picturesResponse.data.filter(picture =>
                                favouriteIds.includes(picture._id)
                            ).map(picture => ({
                                ...picture,
                                src: `${url}${picture.src}`,
                                downloadLink1k: picture.link1k,
                                downloadLink4k: picture.link4k
                            }));
                            setFavourites(filteredFavourites);
                        }
                    } catch (error) {
                        console.error('Error fetching favourites:', error);
                    }
                }
            }
        };

        fetchFavourites();
    }, [isAuthenticated, token]);

    const removeFavourite = async (pictureId) => {
        if (!isAuthenticated) {
            console.log('Please log in to modify favourites.');
            return;
        }

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        };

        const endpoint = `${url}/user/favorites/remove`;

        try {
            const response = await axios.post(endpoint, { pictureId }, config);
            if (response.data.success) {
                setFavourites(favourites.filter(fav => fav._id !== pictureId));
                console.log('Favourite removed successfully.');
            } else {
                console.log('Could not remove the favourite:', response.data.message);
            }
        } catch (error) {
            console.error('Failed to remove favourite:', error);
        }
    };

    const handleDownloadClick = (picture) => {
        setSelectedPicture(picture);
        setIsModalOpen(true);
    };

    if (!favourites.length) {
        return (
            <div className='favourites-nofav'>
                <h1 className='title'>Your Favourites</h1>
                <p className='nofav'>🥺 No favourites to display.</p>
                <img src={nofav} alt="No Favourites" className="img-scale" />
            </div>
        );
    }

    return (
        <div id="favourites">
            <div className='favourites'>
                <h1 className='title'>Your Favourites</h1>
                <input
                    className='input'
                    type="text"
                    placeholder="Search by tag..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                <div className='favourites-container'>
                    {favourites.filter(picture => 
                        picture.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
                    ).map(picture => (
                        <Picture 
                            key={picture._id}
                            src={picture.src}
                            alt={picture.alt}
                            tags={picture.tags}
                            isFavourite={true}
                            onFavourite={() => removeFavourite(picture._id)}
                            onDownload={() => handleDownloadClick(picture)}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && selectedPicture && (
                <DownloadModal
                    onClose={() => setIsModalOpen(false)}
                    link1k={selectedPicture.downloadLink1k}
                    link4k={selectedPicture.downloadLink4k}
                />
            )}
        </div>
    );
}

export default Favourites;
