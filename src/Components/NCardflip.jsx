import React, { useState } from "react";
import "./Cardflip.css"; // Include the CSS file

const FlipCard = ({ frontImage, backText }) => {
  return (
    <div className="card-container">
      <div className="flip-card" >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={frontImage} // Dynamically load the front image
              alt="Card Front"
            />
          </div>
          <div className="flip-card-back">
            <p>{backText}</p> {/* Dynamically load the back text */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FlipCard;
