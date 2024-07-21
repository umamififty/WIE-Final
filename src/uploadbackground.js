import React from 'react';
import ReactPlayer from 'react-player';
import './uploadbackground.css'; // Create this CSS file for styling

const UploadBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=U9b4YwZP5uM" // Replace with your YouTube video URL
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      />
    </div>
  );
};

export default UploadBackground;
