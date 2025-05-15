import React from 'react';
import './Hero.css'; // Tạo file CSS riêng
// import profilePic from '../assets/profile-pic.jpg'; // Import ảnh nếu có

function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* <img src={profilePic} alt="Your Name" className="profile-picture" /> */}
      <h1>Xin chào, tôi là [Tên của bạn]</h1>
      <h2>[Chức danh của bạn - ví dụ: Frontend Developer, Web Developer]</h2>
      <p>[Một câu giới thiệu ngắn gọn về bản thân hoặc mục tiêu nghề nghiệp]</p>
      <a href="#projects" className="cta-button">Xem dự án của tôi</a>
    </section>
  );
}

export default Hero;