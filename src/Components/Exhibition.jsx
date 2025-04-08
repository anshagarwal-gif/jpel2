import React from "react";
import "./Exhibition.css";
import mapImage from '../assets/exhibitionmap.jpeg';


const Exhibition = () => {
  return (
    <div className="exhibition-container">
      <div className="exhibition-header">
        <div className="upcoming-text">UPCOMING</div>
        <h2 className="exhibitions-title">EXHIBITIONS</h2>
      </div>
      
      <div className="exhibition-map">
        <img 
          src= {mapImage}
          alt="Upcoming Exhibitions 2024" 
          className="world-map-image"
        />
      </div>
    </div>
  );
};

export default Exhibition;