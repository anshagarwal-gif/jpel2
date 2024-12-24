import React from "react";
import "./Footer.css"; // Import the CSS file
import logo from '../assets/footer-logo.jpg'; // Replace this with the actual path to your logo image

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
          </ul>
        </div>

        {/* Center Section */}
        <div>
          <h4>PRODUCT LINE</h4>
          <ul>
            <li>Tape Stretching Lines</li>
            <li>Circular Weaving Machine</li>
            <li>Extrusion Coating Lines</li>
            <li>Flexo Printing Machines</li>
            <li>Bag Conversion Lines</li>
            <li>Bag Conversion (ValveTech)</li>
            <li>Recycling Lines</li>
            <li>Monofilament Lines</li>
            <li>PP/PET Box Strapping Lines</li>
            <li>Multilayer Sheet Lines</li>
            <li>Multilayer Cast Film Lines</li>
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
        <div className="footer-social">
        <a href="#" target="_blank"><i class="fab fa-facebook-f"></i> </a>
    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
