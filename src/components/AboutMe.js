import React from 'react';
import './App.css';
import image from './logo.png';

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <h2>About Me</h2>
      <img src={image} alt="My Image" className="my-image" />
      <p>
        Hello, I'm Sourabh [pronounced - 'So-Rub']. I like 
        mathematics and chess. Welcome to my portfolio. Here, you
        can find some of my projects I've worked on so far :)
      </p>
    </div>
  );
};

export default AboutMe;
