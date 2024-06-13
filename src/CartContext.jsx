import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemIdCounter, setCartItemIdCounter] = useState(1);

  const addToCart = (item) => {
    const newItem = { ...item, cartItemId: cartItemIdCounter };
    setCartItems((prevItems) => [...prevItems, newItem]);
    setCartItemIdCounter((prevCounter) => prevCounter + 1);
  };

  const removeFromCart = (cartItemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
