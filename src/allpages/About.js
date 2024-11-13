import React from 'react';
import { Download } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="title-underline"></div>
        </div>

        <div className="avatar-container">
          <div className="avatar">
            <span className="avatar-text">RK</span>
          </div>
        </div>

        <p className="about-description">
          Hello! I'm a passionate developer with experience in building web applications  and mobile application
          using modern technologies. I enjoy solving complex problems and learning new skills.
          Welcome to my portfolio!
        </p>

        <div className="button-container">
          <a href="/resume.pdf" download className="resume-button">
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;