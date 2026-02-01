import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import navlogo from '../assets/JPELlogo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Check initially and on resize
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Add scroll effect for navbar (only for non-mobile devices)
    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) {
                // Skip scrolling animation for mobile
                return;
            }
            
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    // Handle body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            
            // Close mobile menu if clicked outside
            if (isMenuOpen && navbar && !navbar.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Close menu on window resize (if mobile menu is open and screen gets larger)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    // Apply mobile styles to body on component mount
    useEffect(() => {
        const applyMobileStyles = () => {
            if (window.innerWidth <= 768) {
                document.body.classList.add('mobile-view');
            } else {
                document.body.classList.remove('mobile-view');
            }
        };
        
        // Apply on mount and when window resizes
        applyMobileStyles();
        window.addEventListener('resize', applyMobileStyles);
        
        return () => {
            window.removeEventListener('resize', applyMobileStyles);
        };
    }, []);

    // Product line dropdown items
    const productLineItems = [
        { to: '/PlasticRecycling/woven-packaging', label: 'WOVEN PACKAGING' },
        { to: '/PlasticRecycling/plastic-recycling', label: 'PLASTIC RECYCLING' },
        { to: '/PlasticRecycling/profile-extrusion', label: 'PROFILE EXTRUSION' },
        { to: '/PlasticRecycling/sheet-film-extrusion', label: 'SHEET/FILM EXTRUSION' },
    ];

    // Spares & Services dropdown items
    const sparesServicesItems = [
        // { to: '/Service', label: 'IOT SERVICES' },
        { to: '/Service', label: 'Spare Part Services' },
        { to: '/iot-services', label: 'IoT Services' },
    ];

    const navLinks = [
        { to: '/', label: 'HOME' },
        { to: '/Aboutus', label: 'ABOUT US' },
        { 
            label: 'PRODUCT LINE', 
            isDropdown: true,
            items: productLineItems
        },
        { 
            label: 'SERVICES', 
            isDropdown: true,
            items: sparesServicesItems
        },
        { to: '/news', label: 'NEWS & EVENTS' },
        { to: '/Exhibition', label: 'EXHIBITIONS' },
        { to: '/Carrer', label: 'CAREERS' },
        { to: '/ContactUs', label: 'CONTACT US' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (e, index) => {
        e.preventDefault();
        
        if (isMobile) {
            // For mobile: toggle the specific dropdown
            if (activeDropdown === index) {
                setActiveDropdown(null);
            } else {
                setActiveDropdown(index);
            }
        } else {
            // For desktop: use the isDropdownOpen state
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <nav className={`navbar ${!isMobile && scrolled ? 'scrolled' : ''}`}>
            {/* Logo container */}
            <div className="logo-container">
                <Link to="/">
                    <img src={navlogo || "/placeholder.svg"} alt="J P ExtrusionTech Pvt Ltd" className="logo" />
                </Link>
            </div>

            {/* Mobile menu toggle (only visible on mobile) */}
            {isMobile && (
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="menu-toggle-bar"></span>
                    <span className="menu-toggle-bar"></span>
                    <span className="menu-toggle-bar"></span>
                </button>
            )}
            
            {/* Navigation links */}
            <div className={`links-container ${isMenuOpen ? 'active' : ''}`}>
                <ul className="links-list">
                    {navLinks.map((link, index) => (
                        <li className={`link-item ${link.isDropdown ? 'dropdown' : ''}`} key={index}>
                            {link.isDropdown ? (
                                <>
                                    <a 
                                        href="#" 
                                        className={`nav-link dropdown-toggle ${hoveredLink === index ? 'hovered' : ''} ${activeDropdown === index ? 'active' : ''}`}
                                        onClick={(e) => toggleDropdown(e, index)}
                                        onMouseEnter={() => !isMobile && setHoveredLink(index)}
                                        onMouseLeave={() => !isMobile && setHoveredLink(null)}
                                        aria-expanded={activeDropdown === index}
                                    >
                                        {link.label}
                                    </a>
                                    <ul 
                                        className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}
                                    >
                                        {link.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <Link 
                                                    to={item.to} 
                                                    className="dropdown-item"
                                                    onClick={handleLinkClick}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <Link
                                    to={link.to}
                                    className={`nav-link ${hoveredLink === index ? 'hovered' : ''}`}
                                    onMouseEnter={() => setHoveredLink(index)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;