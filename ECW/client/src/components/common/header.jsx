import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header-container">
      <Link to={"/"} className="logo">
        <FontAwesomeIcon icon={faShoppingCart} className="menu-icon" /> ShopCart
      </Link>
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
          <NavLink to="/catagories"> Catagories</NavLink>
        </li>
        <li className="navLinks">
          {" "}
          <NavLink to="/deals"> Deals</NavLink>
        </li>

        <li className="navLinks">
          {" "}
          <NavLink to="/account">
            <FontAwesomeIcon icon={faUser} /> Account
          </NavLink>
        </li>
        <li className="navLinks">
          {" "}
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
