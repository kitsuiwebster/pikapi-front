import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/scss/pages/Account.scss';

function Account() {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token'); 
    const userId = localStorage.getItem('userId');
    const backendUrl = 'http://localhost:4001';

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`${backendUrl}/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (response.data.success) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        if (userId && token) {
            fetchUserDetails();
        }
    }, [userId, token]);

    if (!user) {
        return <p>Loading user details...</p>;
    }

    return (
        <div id="account">
            <div className='account'>
                <h1 className='account-title'>Your Account</h1>
                <div className='account-elements'>
                    <h2 className='account-element'>➜ Username: {user.username}</h2>
                    <h2 className='account-element'>➜ Email: {user.email}</h2>
                    <h2 className='account-element'>➜ Favourites: {user.favorites.length}</h2>
                </div>
            </div>
        </div>
    );
}

export default Account;
