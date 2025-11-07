import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import menuIcon from "../assets/open_menu.svg"; // your hamburger icon (SVG is best)
import closeIcon from "../assets/close_menu.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#films">Films</a>
        <a href="#brands">Brands</a>
        <a href="#art">Art</a>
        <a href="#story">Our Story</a>
        <a href="#contact" className="talk-btn">Let's Talk</a>
      </nav>

      <img
        src={menuOpen ? closeIcon : menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </header>
  );
};

export default Navbar;
