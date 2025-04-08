import React, { useState, useCallback, useEffect } from "react";
import "./Cardflip.css";
// Remove Exhibition import completely

const Cardflip = ({
  cardInfo,
  cardTitle,
  thumbnailImage,
  galleryImages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  // Handle escape key press
  const handleEscapeKey = useCallback(
    (event) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    },
    [isModalOpen]
  );

  // Add and remove event listeners
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, handleEscapeKey]);

  // Prevent image click from closing modal
  const handleImageClick = (e) => {
    e.stopPropagation();
  };

  // Close modal if clicked outside content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay1")) {
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300); // Match the CSS transition duration
  };

  const goToNext = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const goToPrev = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  return (
    <div className="card-container">
      {/* Card header */}
      <div className="card-header">
        <p>Click to view gallery</p>
      </div>
      
      {/* Flip Card */}
      <div className="flip-card" onClick={openModal}>
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front">
            <img
              src={thumbnailImage}
              alt="Exhibition"
              className="card-image"
            />
          </div>
          {/* Back */}
          <div className="flip-card-back">
            <p className="card-info">{cardInfo}</p>
          </div>
        </div>
        <div className="card-title">{cardTitle}</div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`modal-overlay1 ${isClosing ? 'closing' : ''}`}
          role="dialog"
          aria-modal="true"
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