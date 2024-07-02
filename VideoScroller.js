import React, { useState, useRef, useEffect } from 'react';
import Phone from '../Phone/Phone';
import './VideoScroller.css';

const VideoScroller = ({ videos }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef([]);

  const handlePhoneClick = (index) => {
    setSelectedIndex(index);
    setIsPlaying(false);
  };

  const handlePlay = (currentVideoRef) => {
    videoRefs.current.forEach((videoRef) => {
      if (videoRef.current !== currentVideoRef.current) {
        videoRef.current.pause();
      }
    });
    setIsPlaying(true);
  };

  useEffect(() => {
    const selectedElement = document.querySelector('.phone.selected');
    if (selectedElement && window.innerWidth <= 480) {
      selectedElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [selectedIndex]);

  return (
    <div className="video-scroller">
      {videos.map((videoSrc, index) => (
        <Phone
          key={index}
          videoSrc={videoSrc}
          isSelected={index === selectedIndex}
          onClick={() => handlePhoneClick(index)}
          onPlay={(videoRef) => {
            videoRefs.current[index] = videoRef;
            handlePlay(videoRef);
          }}
          isPlaying={isPlaying && index === selectedIndex}
        />
      ))}
    </div>
  );
};

export default VideoScroller;