import React from "react";
import "./Rotation.css"; // Import your CSS file
import logo from "../assets/1-removebg.png";

const SpinningCards = () => {
  return (
    <div className="wrapper4">
      <div className="inner2" style={{ "--quantity": 11 }}>
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
    </div>
  );
};

export default SpinningCards;
