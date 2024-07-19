import React from 'react';
import './navbar.css';

const Navbar = ({ 
  showSideVideo1, 
  toggleSideVideo1, 
  showSideVideo2, 
  toggleSideVideo2, 
  changeMood 
}) => {
  return (
    <div className="navbar">
      <ul>
        <li className={showSideVideo1 ? 'active' : ''} onClick={toggleSideVideo1}>
          Toggle Side Video 1
        </li>
        <li onClick={() => changeMood('happy')}>😊</li>
        <li onClick={() => changeMood('angry')}>😡</li>
        <li onClick={() => changeMood('motivation')}>💪</li>
        <li onClick={() => changeMood('chill')}>😎🤙</li>
        <li className={showSideVideo2 ? 'active' : ''} onClick={toggleSideVideo2}>
          Toggle Side Video 2
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
