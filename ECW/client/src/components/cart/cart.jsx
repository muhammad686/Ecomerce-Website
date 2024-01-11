import React from "react";
import "../../assets/styles/cart.css";
const Cart = () => {
  return (
    <div className="main-card-container">
      <div className="cards-container">
        <div className="img"></div>
        <div className="details">
          <p>product name</p>
          <p>product rating</p>
        </div>
        <div className="action-links"></div>
        <div className="price"></div>
      </div>
      <div className="checkout-container">
        <h4>Total</h4>
        <h2>$199</h2>
        <button type="submit">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
