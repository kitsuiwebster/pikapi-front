// src/pages/Shop.jsx
import React from 'react';
import ShopItem from '../components/ShopItem';
import '../assets/scss/pages/Shop.scss';
import '../assets/scss/index.scss';
import itemsData from '../js/shop-items'; 

function Shop() {
    return (
        <>
            <div id="shop">
                <div className="shop">
                    <h1 className='title'>Shop</h1>
                    <div className="shop-items">
                        {itemsData.map(item => (
                            <ShopItem
                                key={item.id}
                                imagePath={item.imagePath}
                                title={item.title}
                                price={item.price}
                                iconPath={item.iconPath}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
