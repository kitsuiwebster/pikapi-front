import React from 'react';
import '../assets/scss/pages/Music.scss';
import '../assets/scss/index.scss';
import pikaPiCover from '../assets/images/pika-pi.jpg';

function Music() {
    return (
        <div id="music">
            <div className="music">
                <h1 className='title'>Pikachu Music</h1>
                <div className='music-song-cover'>
                    <img className='music-song-cover-img' src={pikaPiCover} alt="Cover of the Pikachu song" />
                    <p className='music-song-cover-text'>Pika pi is a Lo-Fi song produced by
                        <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/2RfZJZyxeVbnB30hgQJFdy?si=2W7TRkhIR-WhrNpqB8IB-g" className="about-link"> Al Amson</a>.
                        (Play it on Spotify to listen to it with Pikachu voices 🤗)</p>
                </div>
                <div className='music-spotify-player'>
                    <div className="responsive-iframe-container">
                        <iframe
                            title='Pikachu Song'
                            src="https://open.spotify.com/embed/track/630YJCt2eABHHH9mLTUPqB?utm_source=generator"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
                <h2 className='music-playlist-title'>Pikachu Playlist</h2>
                <div className='music-spotify-player'>
                    <div className="responsive-iframe-container">
                        <iframe
                            title='Pikachu Playlist'
                            src="https://open.spotify.com/embed/playlist/52dGMtt01uLekWJ7AHZSGO?utm_source=generator"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Music;
