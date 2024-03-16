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
import lightPikadex from '../assets/images/light-pikadex.png';
import darkPikadex from '../assets/images/dark-pikadex.png';
import lightUser from '../assets/images/light-user.png'; 
import darkUser from '../assets/images/dark-user.png';

function SideMenu() {
    const { theme } = useTheme();
    return (
      <nav className="side-menu">
          <Link className='side-menu-link' to="/favourites">
              <div className="side-menu-item">
                  <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightHeart : darkHeart} alt='Favourite Pictures' />
                  <span className="side-menu-text">Favourites</span>
              </div>
          </Link>
          <Link className='side-menu-link' to="/pikadex">
              <div className="side-menu-item">
                  <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightPikadex : darkPikadex} alt='Pikadex' />
                  <span className="side-menu-text">Pikadex</span>
              </div>
          </Link>
          <Link className='side-menu-link' to="/about">
              <div className="side-menu-item">
                  <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightAbout : darkAbout} alt='About Page' />
                  <span className="side-menu-text">About</span>
              </div>
          </Link>
          <Link className='side-menu-link' to="/account">
              <div className="side-menu-item">
                  <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightUser : darkUser} alt='Account Page' />
                  <span className="side-menu-text">Account</span>
              </div>
          </Link>
          <Link className='side-menu-link' to="/contact">
              <div className="side-menu-item">
                  <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightContact : darkContact} alt='Contact Page' />
                  <span className="side-menu-text">Contact</span>
              </div>
          </Link>
      </nav>
    );
  }
  
export default SideMenu;
