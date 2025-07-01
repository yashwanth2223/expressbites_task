import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-logo">
        <NavLink to="/">HealthyBites Express</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/menu">Menu</NavLink></li>
        {/* <li><NavLink to="/order">Order</NavLink></li> */}
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar; 