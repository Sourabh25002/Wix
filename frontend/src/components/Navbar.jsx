import React, { useState } from "react";
import "../styles/navbar_style.css";
import logo from "../assets/poly_Icon.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <span className="navbar-title">Poly</span>
      </div>
      <div className="navbar-right">
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>Product</li>
          <li>About</li>
          <li>Partners</li>
          <button className="navbar-button">Get a Demo</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
