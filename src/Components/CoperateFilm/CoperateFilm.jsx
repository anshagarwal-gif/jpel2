import React ,{useEffect, useState} from 'react';
import { Play } from 'lucide-react';
import './CoperateFilm.css';

const CoperateFilm = ({ thumbnailUrl, videoUrl }) => {
  const [textVisible, setTextVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setTextVisible(true);
    }, 300);
  }, []);
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
           
          </div>
        </div>
      </div>
      <div className={`title-container-film ${textVisible ? 'visible' : ''}`}>
        <div className="title-main">JP GROUP</div>
        <div className="title-sub">CORPORATE FILM</div>
      </div>
    </div>
  );
};

export default CoperateFilm;