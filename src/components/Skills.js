import React from 'react';
import './Skills.css';

function Skills() {
  // Bạn có thể tổ chức danh sách kỹ năng theo loại
  const skillCategories = {
    "Ngôn ngữ": ["JavaScript (ES6+)", "HTML5", "CSS3", "Python", "SQL"],
    "Frameworks/Thư viện": ["React", "Node.js", "Express", "jQuery"],
    "Cơ sở dữ liệu": ["MongoDB", "PostgreSQL", "MySQL"],
    "Công cụ": ["Git", "Docker", "Webpack", "npm/yarn", "VS Code"],
    "Khác": ["REST APIs", "Responsive Design", "Agile/Scrum"]
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Kỹ năng</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {skills.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;