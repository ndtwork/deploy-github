import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} [Tên của bạn]. All rights reserved.</p>
      {/* Optional: Link to source code of the portfolio itself */}
      <p>
        <a href="https://github.com/[YourUsername]/[YourRepoName]" target="_blank" rel="noopener noreferrer">
           View Source on GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;