import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
        <span>KodeShop</span>
      </Link>
      <NavLink className="navigation">
        <Link to="/" className="link">
          {" "}
          Home
        </Link>
        <Link to="/cart" className="link">
          {" "}
          Cart
        </Link>
      </NavLink>
      <Link to="/cart" className="items">Cart: 2</Link>
    </header>
  );
};
