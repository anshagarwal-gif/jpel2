import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../Components/VedioCard.css";

const VideoCard = ({ videoTitle, videoThumbnail, videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // Extract video ID and create embed URL
  const getEmbedUrl = (url) => {
    try {
      if (url.includes('youtu.be')) {
        return url.replace('youtu.be/', 'youtube.com/embed/');
      } else if (url.includes('youtube.com/watch')) {
        const videoId = new URLSearchParams(new URL(url).search).get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    } catch (error) {
      console.error('Invalid URL:', error);
      return url;
    }
  };

  return (
    <div className="video-card">
      <div className="video-thumbnail" onClick={openVideo}>
        <img 
          src={videoThumbnail} 
          alt={videoTitle} 
          className="thumbnail-image" 
        />
        <div className="play-button-overlay">
          <span className="play-button"></span>
        </div>
      </div>
      
      <div className="video-title">
        {videoTitle}
      </div>

      {isVideoOpen && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeVideo}></div>
          <div className="modal-content">
            <span className="close-button2" onClick={closeVideo}>
              &times;
            </span>
            <ReactPlayer 
              url={getEmbedUrl(videoUrl)}
              controls
              playing
              width="100%"
              height="100%"
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    rel: 0,
                    origin: window.location.origin
                  }
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;