import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tech">
        <strong>Công nghệ:</strong> {project.technologies.join(', ')}
      </div>
      <div className="project-links">
        {project.liveUrl && project.liveUrl !== "#" && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;