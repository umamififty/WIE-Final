import React from 'react';
import { Link } from 'react-router-dom';
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
        <li className='emoji' onClick={() => changeMood('happy')}>😊</li>
        <li className='emoji' onClick={() => changeMood('angry')}>😡</li>
        <li className='emoji' onClick={() => changeMood('motivation')}>💪</li>
        <li className='emoji' onClick={() => changeMood('chill')}>😎</li>
        <li className={showSideVideo2 ? 'active' : ''} onClick={toggleSideVideo2}>
          Toggle Side Video 2
        </li>
        <li>
          <Link to="/uploadpage">Go to Upload Page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
