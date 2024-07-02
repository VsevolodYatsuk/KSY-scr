import React, { useRef, useEffect } from 'react';
import './Phone.css';

const Phone = ({ videoSrc, isSelected, onClick, onPlay, isPlaying }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    onPlay(videoRef);
  };

  useEffect(() => {
    if (!isSelected) {
      videoRef.current.pause();
    }
  }, [isSelected]);

  return (
    <div className={`phone ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="phone-screen">
        <div className="notch"></div>
        <video
          src={videoSrc}
          controls
          className={`phone-video ${isSelected ? '' : 'hidden-controls'}`}
          ref={videoRef}
          onPlay={handlePlay}
        ></video>
      </div>
    </div>
  );
};

export default Phone;