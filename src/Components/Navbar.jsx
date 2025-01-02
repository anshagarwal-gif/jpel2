import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Import icons
import { Link } from "react-router-dom";
import navlogo from '../assets/JPELlogo.jpg';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 10,
      padding: '10px 20px',
    },
    logo: {
      height: '70px',
    },
    linksContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
    },
    linksList: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '20px',
    },
    linkItem: {
      margin: 0,
    },
    link: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '14px',
      letterSpacing: '1px',
      padding: '10px',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#e74c3c',
    },
    socialContainer: {
      marginLeft: 'auto',
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      fontSize: '18px',
      color: '#333',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
    socialIconHover: {
      color: '#e74c3c',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img src={navlogo} alt="J P ExtrusionTech Pvt Ltd" style={styles.logo} />
      </div>
      <div style={styles.linksContainer}>
        <ul style={styles.linksList}>
          <li style={styles.linkItem}>
            <Link to="/about" style={styles.link}>
              ABOUT US
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="/product" style={styles.link}>
              PRODUCT LINE
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="/Service" style={styles.link}>
              SERVICES
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="/news" style={styles.link}>
              NEWS & EVENTS
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="/Exhibition" style={styles.link}>
              EXHIBITIONS
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="/careers" style={styles.link}>
              CAREERS
            </Link>
          </li>
          <li style={styles.linkItem}>
            <Link to="ContactUs" style={styles.link}>
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div style={styles.socialContainer}>
        <a href="https://facebook.com" style={styles.socialIcon}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" style={styles.socialIcon}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" style={styles.socialIcon}>
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" style={styles.socialIcon}>
          <FaYoutube />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
