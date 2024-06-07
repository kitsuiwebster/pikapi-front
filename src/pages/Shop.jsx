// src/pages/Shop.jsx
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

    const filteredItems = itemsData.filter(item =>
        (item.title.toLowerCase().includes(searchTerm) || item.tags.some(tag => tag.includes(searchTerm))) &&
        (filterType ? item.type === filterType : true)
    );

    return (
        <>
            <div id="shop">
                <div className="shop">
                    <h1 className='title'>Shop</h1>
                    <input
                        type="text"
                        placeholder="Search items..."
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                    <select onChange={handleFilterChange} className="filter-select">
                        <option value="">All Types</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Books">Books</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Beauty">Beauty</option>
                    </select>
                    <div className="shop-items">
                        {filteredItems.map(item => (
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
