import React, { useEffect, useState } from "react";
import "./Homepageanimation.css";
import logo from "../assets/logo.jpg"

const Homepageanimation = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("design-component");
      const rect = element.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsInView(inView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="design-component"
      className={`design-container ${isInView ? "fade-in" : ""}`}
    >
      <div className="design-header">
        <img
          src={logo}
          alt="Company Logo"
          className="company-logo"
        />
       
       
      </div>
      <div className="design-content">
        
        <p>
        <span className="company-name">J P Extrusiontech Pvt. Ltd.</span>stands at the forefront of innovation, proudly leading the way in the
          manufacturing and export of high-quality plastic processing machinery
          and equipment. Our commitment to excellence ensures that we deliver
          cutting-edge solutions that empower industries and enhance
          productivity.{" "}
          <a href="/join-us" className="join-link">
            Join us
          </a>{" "}
          in shaping the future of plastic processing!
        </p>
      </div>
    </div>
  );
};

export default Homepageanimation;
