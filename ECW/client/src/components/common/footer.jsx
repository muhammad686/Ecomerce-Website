import React from "react";
import "../../assets/styles/footer.css";
import Epay from "../../assets/images/epay.png";
import EasyPaisa from "../../assets/images/easypaisa.png";
import Gpay from "../../assets/images/gpay.png";
import Jazzcash from "../../assets/images/jazzcash.png";
import Mastercard from "../../assets/images/mastercard.png";
import Paypal from "../../assets/images/paypal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="footer-child-container1">
        <div className="column-containers">
          <ul className="logo-in-footer">
            <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" />{" "}
            ShopCart
          </ul>
          <p>
            Welcome to ShopCart, your go-to destination for a seamless and
            enjoyable online shopping experience. Dive into a world of quality
            products, unbeatable prices, and unparalleled convenience. With a
            user-friendly interface, secure transactions, and a vast array of
            products ranging from electronics to fashion, ShopCart is designed
            to meet all your needs.
          </p>

          <h3>Accepted Payements</h3>
          <div className="payement-options">
            <div className="payment-type">
              <img src={Epay} alt="Epay" className="payement-types" />
            </div>
            <div className="payment-type">
              <img src={Gpay} alt="Gpay" className="payement-types" />
            </div>
            <div className="payment-type">
              <img src={EasyPaisa} alt="Easypaisa" className="payement-types" />
            </div>
            <div className="payment-type">
              <img
                src={Mastercard}
                alt="MasterCard"
                className="payement-types"
              />
            </div>
            <div className="payment-type">
              <img src={Paypal} alt="Paypal" className="payement-types" />
            </div>
            <div className="payment-type">
              <img src={Jazzcash} alt="Jazzcash" className="payement-types" />
            </div>
          </div>
        </div>
        <div className="column-containers">
          <div className="departments">
            <h3>Department</h3>
            <ul className="unordered-list">
              <li>Fashion</li>
              <li>Education Product</li>
              <li>Frozen Food</li>
              <li>Beverages</li>
              <li>Organic Grocery</li>
              <li>Office Supplies</li>
              <li>Beauty Products</li>
              <li>Books</li>
              <li>Electronics & Gadget</li>
              <li>Travel Accesories</li>
              <li>Fitness</li>
              <li>Sneakers</li>
              <li>Toys</li>
              <li>Furniture</li>
            </ul>
          </div>
        </div>
        <div className="column-containers">
          <div className="about-us">
            <h3>About Us</h3>
            <ul className="unordered-list">
              <li>About shopcart</li>
              <li>Careers</li>
              <li>News & Blog</li>
              <li>Help</li>
              <li>Press Center</li>
              <li>Shop by location</li>
              <li>Shopcart brands</li>
              <li>Affiliate & Partners</li>
              <li>Ideas & Guides</li>
            </ul>
          </div>
        </div>
        <div className="column-containers">
          <div className="Services">
            <h3>Services</h3>
            <ul className="unordered-list">
              <li>Gift Card</li>
              <li>Mobile App</li>
              <li>Shipping & Delivery</li>
              <li>Order Pickup</li>
              <li>Account Signup</li>
            </ul>
          </div>
        </div>
        <div className="column-containers">
          <div className="help">
            <h3>Help</h3>
            <ul className="unordered-list">
              <li>Shopcart Help</li>
              <li>Returns</li>
              <li>Track Orders</li>
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>Security & Fraud</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-child-container2">
        <h4>&copy; 2023 All rights reserved by Muhammad Taha</h4>
      </div>
    </div>
  );
};

export default Footer;
