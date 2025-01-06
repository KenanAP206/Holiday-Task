import React from 'react';
import './AdminFooter.css';

function Footer() {
  return (
    <footer className="adminfooter">
      <div className="footer-content">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-service">Terms of Service</a>
          <a href="#contact-us">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
