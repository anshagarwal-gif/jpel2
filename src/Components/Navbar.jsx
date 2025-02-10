import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
import navlogo from '../assets/JPELlogo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/Aboutus', label: 'ABOUT US' },
        { to: '/product', label: 'PRODUCT LINE' },
        { to: '/Service', label: 'SERVICES' },
        { to: '/news', label: 'NEWS & EVENTS' },
        { to: '/Exhibition', label: 'EXHIBITIONS' },
        { to: '/Carrer', label: 'CAREERS' },
        { to: '/ContactUs', label: 'CONTACT US' },
    ];

    const socialLinks = [
        { href: 'https://facebook.com', icon: <FaFacebookF />, id: 'facebook' },
        { href: 'https://instagram.com', icon: <FaInstagram />, id: 'instagram' },
        { href: 'https://linkedin.com', icon: <FaLinkedinIn />, id: 'linkedin' },
        { href: 'https://youtube.com', icon: <FaYoutube />, id: 'youtube' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={navlogo} alt="J P ExtrusionTech Pvt Ltd" className="logo" />
                </Link>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="menu-toggle-bar"></span>
                    <span className="menu-toggle-bar"></span>
                    <span className="menu-toggle-bar"></span>
                </button>
            </div>

            <div className={`links-container ${isMenuOpen ? 'active' : ''}`}>
                <ul className="links-list">
                    {navLinks.map((link, index) => (
                        <li className="link-item" key={index}>
                            <Link
                                to={link.to}
                                className={`nav-link ${hoveredLink === index ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredLink(index)}
                                onMouseLeave={() => setHoveredLink(null)}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="social-container">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-icon ${hoveredIcon === social.id ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIcon(social.id)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            aria-label={`Visit our ${social.id} page`}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;