// src/components/ItemDetail.jsx

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../js/shop-items';
import { CartContext } from '../CartContext';
import Slider from 'react-slick';
import '../assets/scss/pages/ItemDetail.scss';
import '../assets/scss/index.scss';

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#8250;
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}
    >
      &#8249;
    </div>
  );
};

function ItemDetail() {
  const { id } = useParams();
  const item = itemsData.find(item => item.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!item) {
    return <div>Item not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="item-detail">
      {item.sliderImagePath ? (
        <Slider {...settings}>
          {item.sliderImagePath.map((path, index) => (
            <div key={index}>
              <img src={path} alt={item.title} className="item-detail-image" />
            </div>
          ))}
        </Slider>
      ) : (
        <img src={item.imagePath} alt={item.title} className="item-detail-image" />
      )}
      <h1 className="item-detail-title">{item.title}</h1>
      <p className="item-detail-description">{item.description}</p>
      <p className="item-detail-price">Price: {item.free ? 'Free' : `$${item.price}`}</p>
      <button className="button">
        {item.free ? 'Download Now' : 'Buy Now'}
      </button>
      <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
      <p className="item-detail-disclaimer">* This is a digital item. No physical product will be shipped.</p>
    </div>
  );
}

export default ItemDetail;
