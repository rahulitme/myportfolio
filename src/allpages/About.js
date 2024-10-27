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
            <span className="avatar-text">JD</span>
          </div>
        </div>

        <p className="about-description">
          Hello! I'm a passionate developer with experience in building web applications 
          using modern technologies. I enjoy solving complex problems and learning new skills. 
          Welcome to my portfolio!
        </p>

        <div className="skills-grid">
          <div className="skill-card frontend">
            <h3 className="skill-title frontend">Frontend</h3>
            <p className="skill-text">React, Vue, TypeScript</p>
          </div>
          <div className="skill-card backend">
            <h3 className="skill-title backend">Backend</h3>
            <p className="skill-text">Node.js, Python, SQL</p>
          </div>
          <div className="skill-card tools">
            <h3 className="skill-title tools">Tools</h3>
            <p className="skill-text">Git, Docker, AWS</p>
          </div>
        </div>

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