import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";
import logo from '../assets/footer-logo.jpg';

const Footer = () => {
  return (
    <footer>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>
      <div className="container">
        {/* Left Section */}
        <div>
          <img src={logo} alt="JP Group Logo" className="footer-logo" />
          <ul>
            <li>JP Extrusiontech (Pvt) Ltd.</li>
            <li>Jaiko Industries</li>
            <li>J P Industries</li>
            <div className="footer-social">
            <a href="https://www.facebook.com/JPExtrusiontechLtd/" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-facebook-f"></i>
</a>
<a href="https://www.instagram.com/jpextrusiontech/" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-instagram"></i>
</a>
<a href="https://www.linkedin.com/company/jpextusiontech/" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-linkedin-in"></i>
</a>
<a href="https://www.youtube.com/channel/UCupWTPedkCo5Qk_rbpD4zqw" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-youtube"></i>
</a>

            </div>
          </ul>
        </div>

        {/* Center Section */}
        <div>
          <h4>PRODUCT LINE</h4>
          <ul>
            <Link to="/TapeExtrusion"><li>Tape Stretching Lines</li></Link>
            <Link to="/CircularWeaving"><li>Circular Weaving Machine</li></Link>
            <Link to="/ExtrusionCoating"><li>Extrusion Coating Lines</li></Link>
            <Link to="/FlexoPrinting"><li>Flexo Printing Machines</li></Link>
            <Link to="/BagConversion"><li>Bag Conversion Lines</li></Link>
            <Link to="/ValveTech"><li>Bag Conversion (ValveTech)</li></Link>
            <Link to="/RecyclingLines"><li>Recycling Lines</li></Link>
            <Link to="/Monofilament"><li>Monofilament Lines</li></Link>
            <Link to="/BoxStrapping"><li>PP/PET Box Strapping Lines</li></Link>
            <Link to="/MultilayerSheet"><li>Multilayer Sheet Lines</li></Link>
            <Link to="/MultilayerCastFilm"><li>Multilayer Cast Film Lines</li></Link>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h4>CORPORATE OFFICE</h4>
          <p>C1B – 1034 to 1037 GIDC Industrial Estate, Ankleshwar – 393 002, Gujarat – India.</p>
          <p>Phone: +91 99090 47164, +91 99242 02307</p>
          <p>Email: info@jpel.in</p>
          <h4>WORKS</h4>
          <p>1701, G.I.D.C. Industrial Estate, Ankleshwar – 393 002, Dist. Bharuch, Gujarat, India.</p>
          <p>Phone: +91 99090 47164, +91 99242 02307</p>
          <p>Email: info@jpel.in</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 JP Extrusiontech (Pvt) Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;