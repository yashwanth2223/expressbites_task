import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Subscriptions from './../pages/Subscriptions';


const Footer = () => (
  <footer className="footer">
    <div className="footer-content grid-footer">
      <div className="footer-col">
        <h4>Legal</h4>
        <NavLink to="/terms">Terms & Conditions</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </div>
      <div className="footer-col">
        <h4>Offers</h4>
        {/* <NavLink to="/offers">Current Offers</NavLink> */}
        <NavLink to="/subscriptions">Subscription Plans</NavLink>
        <NavLink to="/track">Track Order</NavLink>
      </div>
      <div className="footer-col">
        <h4>Quick Links</h4>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="footer-col">
        <h4>Connect</h4>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>Email: <a href="contact@healthybitesexpress.in ">contact@healthybitesexpress.in</a></p>
        <p>Phone: <a href="tel:+91 86086 92978 , 86086 92218">8608692978,8608692218</a></p>
        <p>Location: 5/2, Lake View Street,Tharamani  Chennai, Tamil Nadu 600113</p>
      </div>
    </div>
    <div className="footer-copy">
      &copy; {new Date().getFullYear()} HealthyBites. All rights reserved.
    </div>
  </footer>
);

export default Footer; 