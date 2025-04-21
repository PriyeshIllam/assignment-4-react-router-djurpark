import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2025 Djurpark | All rights reserved</p>
      
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook"></i> {/* Facebook Icon */}
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i> {/* Twitter Icon */}
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i> {/* Instagram Icon */}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
