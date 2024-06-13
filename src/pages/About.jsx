import React from 'react';
import '../assets/scss/pages/About.scss';
import '../assets/scss/index.scss';
import about from '../assets/images/about.png';
// import AiOpinion from '../components/AiOpinion';

function About() {
    return (
        <>
            <div id="about" className="about-container">
                <div className="about">
                    <h1 className="title">About Pikapi</h1>
                    <p className="about-text">
                        Welcome to Pikapi, the ultimate platform for Pikachu enthusiasts! Created by 
                        <a target="_blank" rel="noopener noreferrer" href="https://kitsuiwebster.com" className="about-link"> Raphaël Martin</a>
                        , also known as @kitsuiwebster, Pikapi allows fans to discover stunning Pikachu illustrations, manage their collections, and download their favourites. As a hub for digital Pikachu-themed content, Pikapi also features a shop where users can purchase exclusive digital items. Excitingly, merchandise options will soon be available!
                    </p>
                    <h2 className="about-heading">The Story of Pikapi</h2>
                    <p className="about-text">
                        Raphaël's journey with AI models began in 2023. As a beginner prompt engineer passionate about Pokémon, he started by posting Pikachu-focused visual content on Instagram at <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kitsuiwebster" className="about-link">@kitsuiwebster</a> in December 2023. Observing the growing enthusiasm for the page, he was inspired to create Pikapi. This platform is designed to gather Pikachu fans from all over the world and continually satisfy the Pikachu community's needs and desires. Raphaël is committed to endlessly innovating and adding new features to enrich the Pikapi experience. Join us in celebrating Pikachu and connect with fellow fans on this unique platform!
                    </p>
                    <div className='about-image-container'>
                        <img src={about} alt="Pikapi" className="about-image" />
                    </div>

                    {/* <AiOpinion/> */}
                </div>
            </div>
        </>
    );
}

export default About;
