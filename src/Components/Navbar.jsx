import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import { Link } from "react-router-dom";
import navlogo from '../assets/JPELlogo.jpg';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navlogo} alt="J P ExtrusionTech Pvt Ltd" /> 
      </div>
      <div className="navbar-links">
        <ul>
        <li><Link to="/about">ABOUT US</Link></li>
      <li><Link to="/product">PRODUCT LINE</Link></li>
      <li><Link to="/services">SERVICES</Link></li>
      <li><Link to="/news">NEWS & EVENTS</Link></li>
      <li><Link to="/Exhibition">EXHIBITIONS</Link></li>
      <li><Link to="/careers">CAREERS</Link></li>
      <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
      <div className="navbar-social">
        <a href="https://facebook.com" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="social-icon">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" className="social-icon">
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
