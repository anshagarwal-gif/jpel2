import React from 'react';
import { Play } from 'lucide-react';
import './CoperateFilm.css';

const CoperateFilm = ({ thumbnailUrl, videoUrl }) => {
  const handleClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="wrapper-film">
      <div className="video-container-film" onClick={handleClick}>
        <img 
          src={thumbnailUrl} 
          alt="Video thumbnail-film"
          className="thumbnail-image-film"
        />
        <div className="overlay-film">
          <div className="play-button-wrapper-film">
            <Play className="play-icon-film" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoperateFilm;