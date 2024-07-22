import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadPage.css';

function UploadPage() {
  const [videoName, setVideoName] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setVideoName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleUpload = () => {
    const recipient = "is0701fr@ed.ritsumei.ac.jp"; // Replace with the actual recipient's email address
    const subject = `VIDEO SUBMISSION: ${category}`;
    const body = `Title: ${videoName}\nLink: ${videoLink}\nCategory: ${category}`;
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the default mail client
    window.location.href = mailtoLink;

    // Optional: Log to console or show a message
    console.log('Opening mail client with subject and body:', subject, body);
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="upload-page">
      <button onClick={handleNavigate} className="navigate-button">Go Back</button>
      <h2>Upload Video</h2>
      <div className="upload-form">
        <div className="input-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Video Title"
            value={videoName}
            onChange={handleNameChange}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Link</label>
          <input
            type="text"
            placeholder="https://youtube.com/xxx"
            value={videoLink}
            onChange={handleLinkChange}
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Category</label>
          <select value={category} onChange={handleCategoryChange} className="input-field">
            <option value="">Select Category</option>
            <option value="happy">Happy</option>
            <option value="angry">Angry</option>
            <option value="motivation">Motivation</option>
            <option value="chill">Chill</option>
          </select>
        </div>
        <button onClick={handleUpload} className="upload-button">UPLOAD</button>
      </div>
    </div>
  );
}

export default UploadPage;
