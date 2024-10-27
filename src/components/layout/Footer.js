import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <button onClick={() => alert('Link 1 clicked')} className="footer-link">Link 1</button>
          <button onClick={() => alert('Link 2 clicked')} className="footer-link">Link 2</button>
          <button onClick={() => alert('Link 3 clicked')} className="footer-link">Link 3</button>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;