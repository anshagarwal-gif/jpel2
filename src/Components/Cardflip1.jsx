import React, { useState, useCallback, useEffect } from "react";
import "./Cardflip.css";

const Cardflip = ({
  cardInfo,
  cardTitle,
  thumbnailImage,
  galleryImages,
  
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle escape key press
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape' && isModalOpen) {
      setIsModalOpen(false);
    }
  }, [isModalOpen]);
  
  // Add and remove event listeners
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, handleEscapeKey]);
  
  // Handle image click
  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent modal from closing when clicking the image
  };
  // Handle click outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay1")) {
      closeModal();
    }
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="card-container">
      {/* Flip Card */}
      <div className="flip-card" onClick={openModal}>
        <div className="flip-card-inner">
          {/* Front side of the card */}
          <div className="flip-card-front">
            <img
              src={thumbnailImage}
              alt="Exhibition"
              className="card-image"
            />
          </div>
          {/* Back side of the card */}
          <div className="flip-card-back">
            <p className="card-info">{cardInfo}</p>
          </div>
        </div>
        <div className="card-title">{cardTitle}</div>
      </div>

      {/* Modal for the gallery with arrows */}
      {isModalOpen && (
        <div
          className="modal-overlay1"
          onClick={handleOverlayClick}
        >
          <div className="modal-content1">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="gallery-container">
              <button className="prev-button" onClick={goToPrev}>
                &#8249;
              </button>
              <div className="gallery-item">
                <img
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].title}
                  className="gallery-image"
                  onClick={handleImageClick}
                />
                <p className="gallery-title">
                  {galleryImages[currentIndex].title}
                </p>
              </div>
              <button className="next-button" onClick={goToNext}>
                &#8250;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cardflip;
