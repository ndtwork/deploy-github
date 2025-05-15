import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

// Dữ liệu mẫu - bạn sẽ thay thế bằng dự án thật của mình
const projectData = [
  {
    id: 1,
    title: "Dự án Portfolio (Chính trang này!)",
    description: "Một trang web portfolio cá nhân được xây dựng bằng React và triển khai trên GitHub Pages.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "#", // Link đến trang live demo (nếu có)
    repoUrl: "https://github.com/[YourUsername]/[YourRepoName]" // Link đến GitHub repo
  },
  {
    id: 2,
    title: "Dự án Ví dụ 2",
    description: "Mô tả ngắn gọn về dự án thứ hai của bạn. Nó giải quyết vấn đề gì? Bạn đã học được gì?",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    liveUrl: "https://example.com/live-demo-2",
    repoUrl: "https://github.com/[YourUsername]/[ProjectRepo2]"
  },
  // Thêm các dự án khác vào đây
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Dự án nổi bật</h2>
      <div className="projects-grid">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;