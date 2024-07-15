import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Navbar from './navbar';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import './navbar.css';

function App() {
  const [videoUrls, setVideoUrls] = useState({
    middle: '',
    side1: '',
    side2: ''
  });

  const [showSideVideo1, setShowSideVideo1] = useState(false);
  const [showSideVideo2, setShowSideVideo2] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [videoVolume, setVideoVolume] = useState(1);

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
      })
      .catch(error => console.error('Error fetching video URLs:', error));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const minOpacity = 0.2; // Minimum opacity value
      const minVolume = 0; // Minimum volume value
      const opacity = Math.max(minOpacity, 1 - (scrollY / documentHeight));
      const volume = Math.max(minVolume, 1 - (scrollY / documentHeight));
      setVideoOpacity(opacity);
      setVideoVolume(volume);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <BackgroundVideo opacity={videoOpacity} volume={videoVolume} />
      <Navbar
        showSideVideo1={showSideVideo1}
        toggleSideVideo1={() => setShowSideVideo1(!showSideVideo1)}
        showSideVideo2={showSideVideo2}
        toggleSideVideo2={() => setShowSideVideo2(!showSideVideo2)}
      />
      <div className="content">
        <div className="intro">
          {/* Your initial content goes here */}
          <h1>諦めんなよ！</h1>
          <p>Scroll down to see the best contents.</p>
        </div>
        <div className="video-section">
          <div className="video-container">
            <div className={`side-video ${!showSideVideo1 ? 'hidden' : ''}`}>
              <ReactPlayer url={videoUrls.side1} width="100%" height="100%" playing muted loop />
            </div>
            <div className="middle-video">
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
      </div>
    </div>
  );
}

export default App;
