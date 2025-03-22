import React from 'react';
import '../PhotoGallery/PhotoGallery.css';

const PhotoGallery = ({ images }) => {
  return (
    <div className="diamond-collage-container">
    <div className="diamond-collage">
      {images.map((image, index) => (
        <div key={index} className={`diamond-item diamond-item-${index + 1}`}>
          <div className="diamond-item-inner">
            <img 
              src={image} 
              alt={`Collage item ${index + 1}`} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default PhotoGallery;