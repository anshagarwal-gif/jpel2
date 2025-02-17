import React from "react";
import "./MachineRange.css";
import { Link } from "react-router-dom";

const MachineRange = () => {
  const sections = [
    {
        title: "Woven Packaging",
        link: "/PlasticRecycling/woven-packaging",
    },
    {
        title: "Plastic Recycling",
        link: "/PlasticRecycling/plastic-recycling",
    },
    {
        title: "Profile Extrusion",
        link: "/PlasticRecycling/profile-extrusion",
    },
    {
        title: "Sheet/Film Extrusion",
        link: "/PlasticRecycling/sheet-film-extrusion",
    },
];

  return (
    <div className="machinery-range">
      <h1 className="machinery-title">Machinery Range</h1>
      <div className="machinery-sections">
        {sections.map((section, index) => (
          <div key={index} className="machinery-section">
            <Link to={section.link} className="machinery-link">
              <div className="machinery-content">
                <h2>{section.title}</h2>
                <button className="button">
                  <svg
                    className="svgIcon"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                  </svg>
                  Explore
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MachineRange;
