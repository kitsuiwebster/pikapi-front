import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import '../assets/scss/pages/Cart.scss';
import '../assets/scss/index.scss';
import emptyCardImg from '../assets/images/empty-cart.avif';
import axios from 'axios';
import { url } from '../index';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (cartItemId) => {
    removeFromCart(cartItemId);
  };

  const getTotalPrice = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    // Calculate total price of all items in the cart
    const totalPrice = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);

      if (!isNaN(itemPrice) && typeof itemPrice === 'number') {
        return total + (item.free ? 0 : itemPrice);
      } else {
        console.error(`Invalid price for item ${item.cartItemId}: ${item.price}`);
        return total;
      }
    }, 0);

    return totalPrice;
  };

  const handleCheckout = async () => {
    try {
        const items = cartItems.map(item => ({
            name: item.title,
            amount: item.free ? 0 : parseFloat(item.price) * 100, // Convert to cents
            quantity: 1, // Assuming quantity is always 1 for simplicity
            downloadId: item.downloadId // Ensure this property is available in your cart item structure
        }));

        const response = await axios.post(`${url}/payments/create-cart-checkout-session`, { items });
        const stripe = window.Stripe(process.env.REACT_APP_STRIPE_TESTING_PUBLIC_KEY);
        const { error } = await stripe.redirectToCheckout({ sessionId: response.data.sessionId });

        if (error) {
            console.error('Error in redirecting to Stripe Checkout:', error.message);
        }
    } catch (error) {
        console.error('Error creating checkout session:', error.response?.data?.error || error.message);
    }
  };


  
  

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className='empty-cart-text'>🫣 The cart is empty.</p>
          <Link to="/shop" className="button">Go to Shop</Link>
          <img src={emptyCardImg} alt="Empty Cart" className="empty-cart-image" />
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.cartItemId} className="cart-item">
              <img src={item.imagePath} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className='cart-item-title'>{item.title}</h2>
                <p>{item.free ? 'Free' : `$${item.price}`}</p>
                <button className="button" onClick={() => handleRemoveFromCart(item.cartItemId)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p className="cart-summary-total-price">Total Price: ${getTotalPrice().toFixed(2)}</p>
            <div className='cart-summary-buttons'>
              <Link to="/shop" className="button cart-summary-button">Continue Shopping</Link>
              <button className='button' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
