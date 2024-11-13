import React from 'react';
import './Header.css';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Rahul 's portfolio</h1>
        <nav className="header-nav">
          <button onClick={() => setCurrentPage('about')} className="hover:underline mx-2">About</button>
          <button onClick={() => setCurrentPage('experience')} className="hover:underline mx-2">Experience</button>
          <button onClick={() => setCurrentPage('projects')} className="hover:underline mx-2">Projects</button>
          <button onClick={() => setCurrentPage('skills')} className="hover:underline mx-2">Skills</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:underline mx-2">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;