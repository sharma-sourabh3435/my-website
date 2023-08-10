import React from 'react';
import './App.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';  // Import the Link component

const Navbar = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <button
            className={`dark-mode-button ${isDarkMode ? 'active' : ''}`}
            onClick={onToggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li> {/* Use the Link component */}
        <li>
          <a
            href="https://drive.google.com/file/d/1t3heX3gcPXgtE-v5I9Pwemyv17_G2L_y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
