import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import '../assets/scss/components/SideMenu.scss';

// icons
import lightHeart from '../assets/images/light-heart.png';
import darkHeart from '../assets/images/dark-heart.png';
import lightAbout from '../assets/images/light-about.png';
import darkAbout from '../assets/images/dark-about.png';
import lightContact from '../assets/images/light-contact.png';
import darkContact from '../assets/images/dark-contact.png';

function SideMenu() {
  const { theme } = useTheme();
  return (
    <nav className="side-menu">
        <Link to="/pikadex">
            <img loading="lazy" className='side-menu-heart' src={theme === 'dark' ? lightHeart : darkHeart} alt='Favourite Pictures' />
        </Link>
        <Link to="/about">
            <img loading="lazy" className='side-menu-about' src={theme === 'dark' ? lightAbout : darkAbout} alt='About Page' />
        </Link>
        <Link to="/contact">
            <img loading="lazy" className='side-menu-contact' src={theme === 'dark' ? lightContact : darkContact} alt='About Page' />
        </Link>
    </nav>
  );
}

export default SideMenu;
