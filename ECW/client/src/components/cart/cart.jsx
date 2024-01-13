import React from "react";
import "../../assets/styles/cart.css";
const Cart = () => {
  return (
    <div className="main-card-container">
      <div className="cart-list">
        <div className="cards-container">
          <div className="img"></div>
          <div className="cart-item-description">
            <div className="item-name-and-price">
              <h4>Quad Camera</h4>
              <h4>$99.99</h4>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
            </div>
          </div>
          <div className="action-links">
            <a href="#">Remove</a>
            <a href="#"> Move to Wishlist</a>
          </div>
          <div className="price"></div>
        </div>
        <div className="checkout-container">
          <h6>Total:</h6>
          <h2>$199</h2>
          <button type="submit">Checkout</button>
        </div>
      </div>
      <div className="cart-list">
        <div className="cards-container">
          <div className="img"></div>
          <div className="cart-item-description">
            <div className="item-name-and-price">
              <h4>Quad Camera</h4>
              <h4>$99.99</h4>
            </div>
            <div className="item-rating-and-cart">
              <p>5 Colors available</p>
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span class="rating-text">(121)</span>
              </div>
            </div>
          </div>
          <div className="action-links">
            <a href="#">Remove</a>
            <a href="#"> Move to Wishlist</a>
          </div>
          <div className="price"></div>
        </div>
        <div className="checkout-container">
          <h6>Total:</h6>
          <h2>$199</h2>
          <button type="submit">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
