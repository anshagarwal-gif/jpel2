import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepageanimation.css';
import logo from '../assets/jplogo45.png';

function Homepageanimation() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      {/* Slanting gradient overlay */}
      <div className="homepage-gradient-overlay"></div>
      
      {/* Content container */}
      <div className="homepage-content-container">
        <div className="homepage-main-content">
          {/* Logo section */}
          <div className="homepage-logo-section slide-in-left">
            <div className="homepage-logo-container">
              <img src={logo} alt="Company Logo" className="homepage-logo" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="homepage-text-content slide-in-right">
            <h1 className="homepage-main-heading">
              J P Extrusiontech
            </h1>
            <p className="homepage-main-paragraph">
              Stands at the forefront of innovation, proudly leading the way in manufacturing 
              and delivering high-quality solutions that empower industries and enhance productivity.
            </p>
            <button
              className="homepage-cta-button"
              onClick={() => navigate('/ContactUs')} // Redirect to Contact Us page
            >
              Join us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepageanimation;