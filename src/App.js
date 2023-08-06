import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <AboutMe />
    </div>
  );
}

export default App;
