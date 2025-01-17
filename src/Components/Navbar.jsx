import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; // Import icons
import { Link } from "react-router-dom";
import navlogo from '../assets/JPELlogo.jpg';

const Navbar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

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
      
      padding: 0,
      gap: '30px',
      marginRight:'20%',
    },
    linkItem: {
      margin: 0,
    },
    link: (isHovered) => ({
      textDecoration: 'none',
      color: isHovered ? '#e74c3c' : '#333', // Change color on hover
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '12px',
      letterSpacing: '1px',
      padding: '10px',
      
      transition: 'color 0.3s ease',
    }),
    socialContainer: {
      marginLeft: 'auto',
      display: 'flex',
      gap: '25px', // Space between social icons
    },
    socialIcon: (isHovered) => ({
      fontSize: '24px', // Adjusted size for visibility
      color: isHovered ? '#e74c3c' : '#333', // Change color on hover
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    }),
  };

  return (
    <nav style={styles.navbar}>
      <div>
        <img src={navlogo} alt="J P ExtrusionTech Pvt Ltd" style={styles.logo} />
      </div>
      <div style={styles.linksContainer}>
        <ul style={styles.linksList}>
          {[
            { to: '/Aboutus', label: 'ABOUT US' },
            { to: '/product', label: 'PRODUCT LINE' },
            { to: '/Service', label: 'SERVICES' },
            { to: '/news', label: 'NEWS & EVENTS' },
            { to: '/Exhibition', label: 'EXHIBITIONS' },
            { to: '/careers', label: 'CAREERS' },
            { to: '/ContactUs', label: 'CONTACT US' },
          ].map((link, index) => (
            <li style={styles.linkItem} key={index}>
              <Link
                to={link.to}
                style={styles.link(hoveredLink === index)}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={styles.socialContainer}>
        {[
          { href: 'https://facebook.com', icon: <FaFacebookF />, id: 'facebook' },
          { href: 'https://instagram.com', icon: <FaInstagram />, id: 'instagram' },
          { href: 'https://linkedin.com', icon: <FaLinkedinIn />, id: 'linkedin' },
          { href: 'https://youtube.com', icon: <FaYoutube />, id: 'youtube' },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            style={styles.socialIcon(hoveredIcon === social.id)}
            onMouseEnter={() => setHoveredIcon(social.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
