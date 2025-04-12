import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import './ImageGallery.css';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: require("../../assets/loom1.jpg"),
    alt: "Industrial CNC Machine",
  },
  {
    id: 2,
    src: require("../../assets/loom2.jpg"),
    alt: "Robotic Arm Assembly",
  },
  {
    id: 3,
    src: require("../../assets/loom3.jpg"),
    alt: "Quality Control System",
  },
  {
    id: 4,
    src: require("../../assets/loom4.jpg"),
    alt: "Manufacturing Line",
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="gallery-container">
      <div className="gallery-inner">
        <h2 className="gallery-title">
          GALLERY
        </h2>
        
        {/* Diamond Gallery Layout */}
        <div className="gallery-layout">
          {/* Top Image */}
          <div className="gallery-item-top">
            <GalleryItem
              image={galleryImages[0]}
              index={0}
              onSelect={() => setSelectedImage(galleryImages[0])}
            />
          </div>
          
          {/* Left Image */}
          <div className="gallery-item-left">
            <GalleryItem
              image={galleryImages[1]}
              index={1}
              onSelect={() => setSelectedImage(galleryImages[1])}
            />
          </div>
          
          {/* Right Image */}
          <div className="gallery-item-right">
            <GalleryItem
              image={galleryImages[2]}
              index={2}
              onSelect={() => setSelectedImage(galleryImages[2])}
            />
          </div>
          
          {/* Bottom Image */}
          <div className="gallery-item-bottom">
            <GalleryItem
              image={galleryImages[3]}
              index={3}
              onSelect={() => setSelectedImage(galleryImages[3])}
            />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />
            <p className="lightbox-description">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;