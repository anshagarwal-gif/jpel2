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

  // Improved URL parsing for YouTube videos
  const getEmbedUrl = (url) => {
    try {
      // Handle youtu.be format
      if (url && url.includes('youtu.be')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      } 
      // Handle youtube.com/watch format
      else if (url && url.includes('youtube.com/watch')) {
        const videoId = new URLSearchParams(new URL(url).search).get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // Handle direct embed URLs
      else if (url && url.includes('youtube.com/embed')) {
        return url;
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
            <div className="player-wrapper">
              <ReactPlayer 
                url={getEmbedUrl(videoUrl)}
                controls
                playing
                width="100%"
                height="100%"
                className="react-player"
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                      modestbranding: 1,
                      rel: 0,
                      origin: window.location.origin,
                      enablejsapi: 1
                    }
                  }
                }}
                onError={(e) => console.error("Player Error:", e)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;