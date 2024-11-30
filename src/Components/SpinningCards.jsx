import React, { useState } from "react";
import "./Rotation.css";
import logo from "../assets/1-removebg.png";

const SpinningCards = () => {
  const [rotateY, setRotateY] = useState(0); // State to track Y-axis rotation
  const rotationStep = 35; // Degree of rotation per click

  // Handle left and right arrow clicks
  const rotateLeft = () => {
    setRotateY((prev) => prev - rotationStep);
  };

  const rotateRight = () => {
    setRotateY((prev) => prev + rotationStep);
  };

  return (
    <div className="wrapper4">
      {/* Left Arrow */}
      <button className="arrow left" onClick={rotateLeft} aria-label="Rotate Left"></button>

      {/* Spinning Cards */}
      <div
        className="inner2"
        style={{ "--quantity": 11, "--rotateY": `${rotateY}deg` }}
      >
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            className="card15"
            style={{
              "--index": index,
              "--color-card": `calc(${142 + index * 10}, 142, 252)`,
            }}
          >
            <div
              className="img15"
              style={{
                backgroundImage: `url(${require(`../assets/${11 + index}.PNG`)})`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button className="arrow right" onClick={rotateRight} aria-label="Rotate Right"></button>
    </div>
  );
};

export default SpinningCards;
