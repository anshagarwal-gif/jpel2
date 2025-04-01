import React, { useEffect, useState } from "react";
import "./Homepageanimation.css";
import logo from "../assets/logo.jpg";

const Homepageanimation = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("design-component");
      if (element) {
        const rect = element.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsInView(inView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="design-component"
      className={`design-container ${isInView ? "fade-in" : ""}`}
    >
      <div className="left-section">
        <div className="logo-containerHome">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </div>
      </div>
      <div className="right-sectionHome">
        <h1 className="company-title">J P Extrusiontech</h1>
        <p className="company-description">
          Stands at the forefront of innovation, proudly leading the way in
          manufacturing and delivering high-quality solutions that
          empower industries and enhance productivity.
        </p>
        <a href="/ContactUs" className="join-button">
          Join us
        </a>
      </div>
    </div>
  );
};

export default Homepageanimation;