import React from "react";
import "../../assets/styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  return (
    <div className="main-wishlist-container">
      <div className="deals-main-container">
        <div className="deals-card-container">
          <div className="item-img">
            <div className="wishlist">
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </div>
          </div>
          <div className="item-description">
            <div className="item-name-and-price">
              <h6>Quad Camera</h6>
              <h6>$99.99</h6>
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
              <div className="card-button">
                <button type="button">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
