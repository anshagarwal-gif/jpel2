import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ZoomIn } from 'lucide-react';
import './GalleryItem.css';

const GalleryItem = ({ image, index, onSelect }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="gallery-item"
      onClick={onSelect}
    >
      <div className="gallery-item-overlay"></div>
      <div className="gallery-item-zoom">
        <ZoomIn className="zoom-icon" size={32} />
      </div>
      <img
        src={image.src}
        alt={image.alt}
        className="gallery-item-image"
      />
    </div>
  );
};

export default GalleryItem;