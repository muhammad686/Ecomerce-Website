import React from "react";
import PropTypes from "prop-types";

const Cart = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
                <p className="item-quantity">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotalPrice()}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
