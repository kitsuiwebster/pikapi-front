import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { CartContext } from '../CartContext';
import '../assets/scss/components/SideMenu.scss';
import { useAuth } from '../AuthContext';
import { logout as clearAuthToken } from '../js/auth';

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
import lightLogout from '../assets/images/light-logout.png';
import darkLogout from '../assets/images/dark-logout.png';
import lightBrowse from '../assets/images/light-browse.png';
import darkBrowse from '../assets/images/dark-browse.png';
import lightMusic from '../assets/images/light-music.png';
import darkMusic from '../assets/images/dark-music.png';
import lightShop from '../assets/images/light-shop.png';
import darkShop from '../assets/images/dark-shop.png';
import lightCart from '../assets/images/light-cart.png';
import darkCart from '../assets/images/dark-cart.png';
import redCart from '../assets/images/red-cart.png';

function SideMenu() {
  const { theme } = useTheme();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleLogout = () => {
    clearAuthToken();
    setIsAuthenticated(false);
    navigate('/login');
  };

  const cartIcon = cartItems.length > 0 ? redCart : (theme === 'dark' ? lightCart : darkCart);

  return (
    <nav className="side-menu">
      <Link className='side-menu-link' to="/browse">
        <div className="side-menu-item">
          <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightBrowse : darkBrowse} alt='Browse Pictures' />
          <span className="side-menu-text">Browse Illustrations</span>
        </div>
      </Link>
      <Link className='side-menu-link' to="/shop">
        <div className="side-menu-item">
          <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightShop : darkShop} alt='Shop' />
          <span className="side-menu-text">Pikapi Shop</span>
        </div>
      </Link>
      <Link className='side-menu-link' to="/cart">
        <div className="side-menu-item">
        {cartItems.length > 0 && (
                <span className="side-menu-cart-badge">{cartItems.length}</span>
            )}
            <img loading="lazy" className='side-menu-icon' src={cartIcon} alt='Cart' />
            
            <span className="side-menu-text">Cart</span>
            
        </div>
      </Link>
      <Link className='side-menu-link' to="/favourites">
        <div className="side-menu-item">
          <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightHeart : darkHeart} alt='Favourite Pictures' />
          <span className="side-menu-text">My Favourites</span>
        </div>
      </Link>
      <Link className='side-menu-link' to="/pikadex">
        <div className="side-menu-item">
          <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightPikadex : darkPikadex} alt='Pikadex' />
          <span className="side-menu-text">Pikadex</span>
        </div>
      </Link>
      <Link className='side-menu-link' to="/music">
        <div className="side-menu-item">
          <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightMusic : darkMusic} alt='Pikachu Music' />
          <span className="side-menu-text">Pikachu Music</span>
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

      {isAuthenticated && (
        <Link className='side-menu-link' to="#" onClick={handleLogout}>
          <div className="side-menu-item">
            <img loading="lazy" className='side-menu-icon' src={theme === 'dark' ? lightLogout : darkLogout} alt='Logout' />
            <span className="side-menu-text">Logout</span>
          </div>
        </Link>
      )}
    </nav>
  );
}

export default SideMenu;
