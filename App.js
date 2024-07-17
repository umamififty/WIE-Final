import React, { useState, useEffect } from 'react';
import './App.css'; // Update with your CSS file if needed
import Navbar from './navbar';
import ReactPlayer from 'react-player';
import videoUrls from './videos.json'; // Import the video URLs from the JSON file

const App = () => {
  const [showSideVideo1, setShowSideVideo1] = useState(false);
  const [showSideVideo2, setShowSideVideo2] = useState(false);
  const [mood, setMood] = useState('happy');

  useEffect(() => {
    console.log(`Mood changed to: ${mood}`);
  }, [mood]);

  return (
    <div className="App">
      <Navbar
        showSideVideo1={showSideVideo1}
        toggleSideVideo1={() => setShowSideVideo1(!showSideVideo1)}
        showSideVideo2={showSideVideo2}
        toggleSideVideo2={() => setShowSideVideo2(!showSideVideo2)}
        changeMood={setMood}
      />
      <div className="video-container">
        <div className={`side-video ${!showSideVideo1 ? 'hidden' : ''}`}>
          <ReactPlayer url={videoUrls.side1} width="100%" height="100%" playing muted loop />
        </div>
        <div className="middle-video">
          <ReactPlayer key={mood} url={videoUrls[mood]} playing controls width="100%" height="500px" />
        </div>
        <div className={`side-video ${!showSideVideo2 ? 'hidden' : ''}`}>
          <ReactPlayer url={videoUrls.side2} width="100%" height="100%" playing muted loop />
        </div>
      </div>
    </div>
  );
}

export default App;
