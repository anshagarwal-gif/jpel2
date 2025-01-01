import React from "react";
import "./MachineRange.css";
import machinerange from "../assets/machinerange.jpg";

const MachineRange = () => {
    const sections = [
      {
        title: "Woven Packaging",
        link: "/woven-packaging",
      },
      {
        title: "Plastic Processing",
        link: "/plastic-processing",
      },
      {
        title: "Profile Extrusion",
        link: "/profile-extrusion",
      },
      {
        title: "Sheet/Film Extrusion",
        link: "/sheet-film-extrusion",
      },
    ];
  
    return (
      <div className="machinery-range">
        <h1 className="machinery-title">Machinery Range</h1>
        <div className="machinery-sections">
          {sections.map((section, index) => (
            <div key={index} className="machinery-section">
              <div className="machinery-content">
                <h2>{section.title}</h2>
                <a href={section.link} className="explore-button">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default MachineRange;
