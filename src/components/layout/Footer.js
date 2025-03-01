import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <button onClick={() => alert('https://github.com/rahulitme')} className="footer-link">GitHub</button>
          <button onClick={() => alert('https://www.linkedin.com/in/rahul-kumar-191473256/')} className="footer-link">linkedin</button>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;