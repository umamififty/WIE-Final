// src/Navbar.js
import React from 'react';

const Navbar = ({ showSideVideo1, toggleSideVideo1, showSideVideo2, toggleSideVideo2 }) => {
  return (
    <div className="navbar">
      <ul>
        <li className={showSideVideo1 ? 'active' : ''} onClick={toggleSideVideo1}>
          Toggle Side Video 1
        </li>
        <li className={showSideVideo2 ? 'active' : ''} onClick={toggleSideVideo2}>
          Toggle Side Video 2
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
