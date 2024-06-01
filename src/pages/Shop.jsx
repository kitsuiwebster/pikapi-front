import React from 'react';
import ShopItem from '../components/ShopItem';
import '../assets/scss/pages/Shop.scss';
import '../assets/scss/index.scss';
import image00 from '../assets/images/items/00.png';
import image01 from '../assets/images/items/01.png';
import image02 from '../assets/images/items/02.png';
import image03 from '../assets/images/items/03.png';
import image04 from '../assets/images/items/04.png';
import image05 from '../assets/images/items/05.png';
import image06 from '../assets/images/items/06.png';

import icon00 from '../assets/images/items/aa.png';
import icon01 from '../assets/images/items/ab.jpg';
import icon02 from '../assets/images/items/ac.jpg';
import icon03 from '../assets/images/items/ad.jpg';
import icon04 from '../assets/images/items/ae.jpg';
import icon05 from '../assets/images/items/af.png';
import icon06 from '../assets/images/items/ag.png';


function Shop() {
    const items = [
        { id: 1, imagePath: image00, title: 'Item 1', price: '25.00', iconPath: icon00 },
        { id: 2, imagePath: image01, title: 'Item 2', price: '30.00', iconPath: icon01 },
        { id: 3, imagePath: image02, title: 'Item 3', price: '20.00', iconPath: icon02 },
        { id: 4, imagePath: image03, title: 'Item 4', price: '15.00', iconPath: icon03 },
        { id: 5, imagePath: image04, title: 'Item 5', price: '50.00', iconPath: icon04 },
        { id: 6, imagePath: image05, title: 'Item 6', price: '45.00', iconPath: icon05 },
        { id: 7, imagePath: image06, title: 'Item 7', price: '40.00', iconPath: icon06 }
    ];

    return (
        <>
            <div id="shop">
                <div className="shop">
                    <h1 className='title'>Shop</h1>
                    <div className="shop-items">
                        {items.map(item => (
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
