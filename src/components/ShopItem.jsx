import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/components/ShopItem.scss';

function ShopItem({ id, imagePath, title, price, iconPath, free }) {
  return (
    <div className="shopitem">
      <Link className='shopitem-link' to={`/item/${id}`}>
        <img src={imagePath} alt={title} className="shopitem-image" />
        <div className='shopitem-container'>
          <h3 className="shopitem-title">{title}</h3>
        </div>
      </Link>
      <div className="shopitem-icon">
        {free ? (
          <p className="shopitem-price" style={{ color: 'green' }}>Free</p>
        ) : (
          <p className="shopitem-price">${price}</p>
        )}
        <img className='shopitem-icon' src={iconPath} alt="Icon" />
      </div>
    </div>
  );
}

export default ShopItem;
