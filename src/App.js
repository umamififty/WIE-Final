import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Navbar from './navbar';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import videoUrls from './videos.json'; // Ensure this path is correct
import UploadPage from './UploadPage'; // Ensure this path is correct

function AppContent() {
  const [showSideVideo1, setShowSideVideo1] = useState(false);
  const [showSideVideo2, setShowSideVideo2] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [videoVolume, setVideoVolume] = useState(1);
  const [playMiddleVideo, setPlayMiddleVideo] = useState(false);
  const [mood, setMood] = useState('happy'); // Example mood state

  const middleVideoRef = useRef(null);
  const location = useLocation();

  // Effect for handling mood changes
  useEffect(() => {
    console.log(`Mood changed to: ${mood}`);
  }, [mood]);

  // Effect for handling scroll and intersection observer
  useEffect(() => {
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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayMiddleVideo(true);
          } else {
            setPlayMiddleVideo(false);
          }
        });
      },
      { threshold: 1.0 } // Adjust threshold as needed
    );

    if (middleVideoRef.current) {
      observer.observe(middleVideoRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (middleVideoRef.current) {
        observer.unobserve(middleVideoRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <BackgroundVideo opacity={videoOpacity} volume={videoVolume} />
      {location.pathname !== '/uploadpage' && (
        <Navbar
          showSideVideo1={showSideVideo1}
          toggleSideVideo1={() => setShowSideVideo1(!showSideVideo1)}
          showSideVideo2={showSideVideo2}
          toggleSideVideo2={() => setShowSideVideo2(!showSideVideo2)}
          changeMood={setMood}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <div className="intro">
                <h1>諦めんなよ！</h1>
                <p>Scroll down to see the best contents.</p>
              </div>
              <div className="video-section">
                <div className="video-container">
                  <div className={`side-video ${!showSideVideo1 ? 'hidden' : ''}`}>
                    <ReactPlayer url={videoUrls.side1} width="100%" height="100%" playing muted loop />
                  </div>
                  <div className="middle-video" ref={middleVideoRef}>
                    <ReactPlayer
                      key={mood} // Ensure ReactPlayer updates when mood changes
                      url={videoUrls[mood]} // Ensure ReactPlayer updates when mood changes
                      playing={playMiddleVideo}
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
          }
        />
        <Route path="/uploadpage" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
