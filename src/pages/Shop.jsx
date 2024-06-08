import React, { useState } from 'react';
import ShopItem from '../components/ShopItem';
import itemsData from '../js/shop-items';
import '../assets/scss/pages/Shop.scss';
import '../assets/scss/index.scss';

function Shop() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('');

    const handleSearchChange = event => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleFilterChange = event => {
        setFilterType(event.target.value);
    };

    const filteredItems = itemsData.filter(item => {
        const searchTermMatch = item.title.toLowerCase().includes(searchTerm) || item.tags.some(tag => tag.includes(searchTerm));
        if (filterType === "Free Items") {
            return searchTermMatch && item.free === true;
        } else {
            return searchTermMatch && (filterType ? item.type === filterType : true);
        }
    });

    return (
        <>
            <div id="shop">
                <div className="shop">
                    <h1 className='title'>Pikapi Shop</h1>
                    <div className='shop-search-container'>
                        <input
                            type="text"
                            placeholder="Search items..."
                            onChange={handleSearchChange}
                            className="shop-search-input"
                        />
                        <select onChange={handleFilterChange} className="shop-filter-select">
                            <option value="">All Items</option>
                            <option value="Phone Wallpaper">Phone Wallpapers</option>
                            <option value="Desktop Wallpaper">Desktop Wallpapers</option>
                            <option value="Bundle">Bundles</option>
                            <option value="Free Items">Free Items</option>
                        </select>
                    </div>
                    <div className="shop-items">
                        {filteredItems.map(item => (
                            <ShopItem
                                key={item.id}
                                imagePath={item.imagePath}
                                title={item.title}
                                price={item.price}
                                iconPath={item.iconPath}
                                free={item.free}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
