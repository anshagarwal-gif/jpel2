import React from "react";
import "../BannerGIF/BannerGIF.css";

const BannerGIF = () => {
  return (
    <div className="gif-container">
      <video className="gif-video" autoPlay loop muted playsInline>
        <source src={require("../BannerGIF/Assets/GIF.webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="gif-overlay">
        <h1 className="gif-text">Welcome to Our Website</h1>
      </div>
    </div>
  );
};

export default BannerGIF;
