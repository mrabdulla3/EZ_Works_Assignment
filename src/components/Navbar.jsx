import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";
import menuIcon from "../assets/open_menu.svg";
import closeIcon from "../assets/close_menu.svg";
import mail from "../assets/mail.svg";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";


  return (
    <header className="navbar">
      <Link to="/">{!isHome && <img src={logo} alt="Logo" className="logo" />}</Link>

      <img
        src={open ? closeIcon : menuIcon}
        alt="Menu"
        className="menu-icon"
        onClick={() => setOpen(!open)}
      />

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/about" onClick={() => setOpen(false)}>Their Stories</Link>
        <Link to="/about" onClick={() => setOpen(false)}>Our Story</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Varnam</Link>
        <Link to="/contact-us" className="talk-btn" onClick={() => setOpen(false)}>
          Let’s Talk <img src={mail}></img>
        </Link>
      </nav>


    </header>
  );
};

export default Navbar;
