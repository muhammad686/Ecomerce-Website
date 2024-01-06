import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/Header.css"; // Import a separate CSS file for styling

const Header = () => {
  return (
    <nav className="header-container">
      <ul className="logo">
        <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" /> ShopCart
      </ul>
      <ul className="linksofnavbar">
        <li className="navLinks">
          {" "}
          <input
            type="text"
            className="Search-product"
            placeholder="Search product"
          />
          <li>
            {" "}
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </li>
        </li>
        <li className="navLinks">
          {" "}
          <a href="#"> Catagories</a>
        </li>
        <li className="navLinks">
          {" "}
          <a href="#"> Deals</a>
        </li>

        <li className="navLinks">
          {" "}
          <a href="#">
            <FontAwesomeIcon icon={faUser} /> Account
          </a>
        </li>
        <li className="navLinks">
          {" "}
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
