import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Navbar from './navbar';
import './App.css';

function App() {
  const [videoUrls, setVideoUrls] = useState({
    middle: '',
    side1: '',
    side2: ''
  });

  const [showSideVideo1, setShowSideVideo1] = useState(false);
  const [showSideVideo2, setShowSideVideo2] = useState(false);

  useEffect(() => {
    fetch('/videos.json')
      .then(response => response.json())
      .then(data => {
        const videoUrls = {
          middle: data.playlists.happy[0], // Assuming 'happy' playlist for the middle video
          side1: data.side1,
          side2: data.side2
        };
        setVideoUrls(videoUrls);
      });
  }, []);

  return (
    <div className="App">
      <Navbar
        showSideVideo1={showSideVideo1}
        toggleSideVideo1={() => setShowSideVideo1(!showSideVideo1)}
        showSideVideo2={showSideVideo2}
        toggleSideVideo2={() => setShowSideVideo2(!showSideVideo2)}
      />
      <div className="video-container">
        <div className={`side-video ${!showSideVideo1 ? 'hidden' : ''}`}>
          <ReactPlayer url={videoUrls.side1} width="100%" height="100%" playing muted loop />
        </div>
        <div className="middle-video" style={{ height: '500px' }}>
          <ReactPlayer
            url={videoUrls.middle}
            playing
            width="100%"
            height="100%"
            controls
          />
        </div>
        <div className={`side-video ${!showSideVideo2 ? 'hidden' : ''}`}>
          <ReactPlayer url={videoUrls.side2} width="100%" height="100%" playing muted loop />
        </div>
      </div>
    </div>
  );
}

export default App;