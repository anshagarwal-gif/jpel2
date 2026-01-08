import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OOSButton.css';

const OOSButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/oos-form');
  };

  return (
    <div className="oos-button-container">
      <button className="oos-button" onClick={handleClick}>
        <div className="oos-button-content">
          <div className="oos-button-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="oos-button-text">
            <span className="oos-button-title">OOS Spare Parts Interest</span>
            <span className="oos-button-subtitle">Express your interest in our spare parts</span>
          </div>
          <div className="oos-button-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default OOSButton;