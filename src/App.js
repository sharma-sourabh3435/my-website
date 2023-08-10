import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Experience from './components/Experience';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
