import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Liên hệ</h2>
      <p>
        Mình rất mong nhận được phản hồi hoặc cơ hội hợp tác. Vui lòng liên hệ qua:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
        {/* Thêm các mạng xã hội hoặc cách liên hệ khác nếu muốn */}
      </ul>
    </section>
  );
}

export default Contact;