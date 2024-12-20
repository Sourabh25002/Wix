import React from "react";
import "../styles/navbar_style.css";
import logo from "../assets/poly_Icon.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <span className="navbar-title">Poly</span>
      </div>
      <div className="navbar-right">
        <ul className="navbar-menu">
          <li>Product</li>
          <li>About</li>
          <li>Partners</li>
        </ul>
        <button className="navbar-button">Get a Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
