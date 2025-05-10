// ModifiedGallery.jsx
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './NewGallery.css'; // Make sure this file exists in the same directory

const ModifiedGallery = ({ galleryTitle = "OUR GALLERY", images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    // Add an entrance animation when component mounts
    setTimeout(() => {
      setHasLoaded(true);
    }, 100);
  }, []);
  
  const openLightbox = (index) => {
    setCurrentSlide(index);
    setSelectedImage(images[index]);
    setIsLightboxOpen(true);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  const nextSlide = (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    
    setIsAnimating(true);
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
    setSelectedImage(images[nextIndex]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  
  const prevSlide = (e) => {
    e.stopPropagation();
    if (isAnimating) return;
    
    setIsAnimating(true);
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevIndex);
    setSelectedImage(images[prevIndex]);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };
  
  // Function to handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        nextSlide(e);
      } else if (e.key === 'ArrowLeft') {
        prevSlide(e);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, currentSlide, isAnimating]);
  
  return (
    <div className={`photo-display-container ${hasLoaded ? 'photo-display-loaded' : ''}`} 
         aria-label="Product gallery">
      <h2 className="photo-display-title">
        {galleryTitle}
        <div className="photo-display-title-line"></div>
      </h2>
      
      <div className="photo-display-grid">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="photo-display-card"
            onClick={() => openLightbox(index)}
            role="button"
            aria-label={`View ${image.alt}`}
            tabIndex="0"
          >
            <div className="photo-display-card-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                className="photo-display-img"
                loading="lazy"
              />
              <div className="photo-display-hover">
                <p className="photo-display-text">{image.alt}</p>
              </div>
              <div className="photo-display-magnify" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="modal-viewer" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image gallery lightbox">
          <button className="modal-viewer-close" onClick={closeLightbox} aria-label="Close gallery">
            <X size={32} />
          </button>
          
          <button className="modal-viewer-control modal-viewer-prev" onClick={prevSlide} aria-label="Previous image">
            <ChevronLeft size={32} />
          </button>
          
          <button className="modal-viewer-control modal-viewer-next" onClick={nextSlide} aria-label="Next image">
            <ChevronRight size={32} />
          </button>
          
          <div className="modal-viewer-wrapper" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={`modal-viewer-img ${isAnimating ? 'modal-viewer-transition' : ''}`}
            />
          </div>
          
          <div className="modal-viewer-indicators" role="tablist">
            {images.map((_, index) => (
              <button
                key={index}
                className={`modal-viewer-dot ${index === currentSlide ? 'modal-viewer-dot-selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                  setSelectedImage(images[index]);
                }}
                aria-label={`Go to slide ${index + 1}`}
                aria-selected={index === currentSlide}
                role="tab"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModifiedGallery;