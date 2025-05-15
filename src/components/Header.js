import React from 'react';
import './Header.css'; // Tạo file CSS riêng nếu cần

function Header() {
  return (
    <header className="app-header">
      <nav>
        <ul>
          {/* Sử dụng anchor links cho single-page app */}
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;