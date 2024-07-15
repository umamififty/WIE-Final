import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css';

const BackgroundVideo = ({ opacity, volume }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && playerRef.current.getInternalPlayer()) {
      playerRef.current.getInternalPlayer().volume = volume;
    }
  }, [volume]);

  return (
    <div className="video-wrapper" style={{ opacity }}>
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=AlLhMySQTlo" // Replace with your YouTube video URL
        playing
        loop
        muted={false} // Ensure the video is not muted
        width="100%"
        height="100%"
        className="video"
        volume={volume} // Pass the volume prop directly to ReactPlayer
      />
    </div>
  );
};

export default BackgroundVideo;
