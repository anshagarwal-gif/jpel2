import React, { useState } from "react";
import "./MazineLayout.css";
import { FaFilePdf } from "react-icons/fa";
const MagazineLayout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of magazine images
  const magazines = [
    {
      src: require("../assets/newevent7.jpg"),
      title: "Plastic Today - April 2021",
    },
    {
      src: require("../assets/newevent8.jpg"),
      title: "Plastic Today - April 2021",
    },
  ];

  // Array of PDF links
  const pdfs = [
    { title: "Plastic Today", link: "/plastic-today-p-k-patkar-2021.pdf" },
    { title: "Polymers Communiqué", link: "/polymer-communique-2017.pdf" },
    { title: "The Economic Times – Polymers", link: "/the-economic-times-polymers-2017.pdf" },
    { title: "Modern Plastics India", link: "/modern-plastics-india-2017.pdf" },
  ];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % magazines.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + magazines.length) % magazines.length
    );
  };

  return (
    <div className="magazine-layout">
      {/* Left Column */}
      <div className="magazine-viewer">
        <button className="nav-button prev" onClick={handlePrev}>
          &#8249;
        </button>
        <img
          src={magazines[currentImageIndex].src}
          alt={magazines[currentImageIndex].title}
          className="magazine-image"
        />
        <button className="nav-button next" onClick={handleNext}>
          &#8250;
        </button>
        <div className="magazine-title">{magazines[currentImageIndex].title}</div>
      </div>

      {/* Right Column */}
      <div className="pdf-list">
        <h2>PRESS RELEASE</h2>
        <ul>
          {pdfs.map((pdf, index) => (
            <li key={index} className="pdf-item">
              {/* PDF Icon */}
              <FaFilePdf className="pdf-icon" />
              <a href={pdf.link} target="_blank" rel="noopener noreferrer">
                {pdf.title}
              </a>
              <div className="pdf-tooltip">{pdf.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MagazineLayout;
