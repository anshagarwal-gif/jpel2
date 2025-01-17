import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VedioCard.css";

const VedioCard = ({ videoTitle, videoThumbnail, videoUrl }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="video-card">
      {/* Card Thumbnail with Play Button */}
      <div className="video-thumbnail" onClick={openVideo}>
        <img src={videoThumbnail} alt={videoTitle} className="thumbnail-image" />
        <div className="play-button-overlay">
          <span className="play-button"></span>
        </div>
      </div>
      <div className="video-title">{videoTitle}</div>

      {/* Modal for Video */}
      {isVideoOpen && (
        <div className="video-modal">
          <div className="modal-overlay" onClick={closeVideo}></div>
          <div className="modal-content">
            <span className="close-button2" onClick={closeVideo}>
              &times;
            </span>
            <ReactPlayer url={videoUrl} controls playing width="100%" height="100%" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VedioCard;
