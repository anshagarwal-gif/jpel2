import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
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
          <li className="dropdown">
            <Link to="/product">PRODUCT LINE</Link>
            <div className="dropdown-content">
              <table>
                <thead>
                  <tr>
                    <th>Woven Packaging</th>
                    <th>Plastic Processing</th>
                    <th>Profile Extrusion</th>
                    <th>Sheet/Film Extrusion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/woven-packaging/tape-stretching-line">Tape Stretching Line</Link>
                    </td>
                    <td>
                      <Link to="/plastic-processing/model-x1">Model X1</Link>
                    </td>
                    <td>
                      <Link to="/profile-extrusion/high-efficiency">High Efficiency</Link>
                    </td>
                    <td>
                      <Link to="/sheet-film-extrusion/50-rpm">50 RPM</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/woven-packaging/mixers">Mixers</Link>
                    </td>
                    <td>
                      <Link to="/plastic-processing/model-m5">Model M5</Link>
                    </td>
                    <td>
                      <Link to="/profile-extrusion/low-noise">Low Noise</Link>
                    </td>
                    <td>
                      <Link to="/sheet-film-extrusion/200l-capacity">200L Capacity</Link>
                    </td>
                  </tr>
                  {/* Add more rows and links as needed */}
                </tbody>
              </table>
            </div>
          </li>
          <li><Link to="/Service">SERVICES</Link></li>
          <li><Link to="/news">NEWS & EVENTS</Link></li>
          <li><Link to="/Exhibition">EXHIBITIONS</Link></li>
          <li><Link to="/careers">CAREERS</Link></li>
          <li><Link to="/ContactUs">CONTACT US</Link></li>
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
