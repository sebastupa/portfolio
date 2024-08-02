import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTrashAlt, FaEdit, FaPlus } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md'; // Importă iconul MdAccessTime

import './style/ProjectsStyle.css'; 

const projects = [
  {
    title: 'Proiectul 1',
    image: 'https://via.placeholder.com/400',
    description: 'Descriere pentru proiectul 1.',
    projectLink: 'http://link-catre-proiectul-1.com',
    githubLink: 'http://github.com/link-catre-repo-1',
    status: 'representative'
  },
  {
    title: 'Lucky Bar',
    image: 'https://via.placeholder.com/400',
    description: 'Descriere pentru proiectul 2.',
    projectLink: 'http://link-catre-proiectul-2.com',
    githubLink: 'http://github.com/link-catre-repo-2',
    status: 'developing'
  },
  {
    title: 'Proiectul 3',
    image: 'https://via.placeholder.com/400',
    description: 'Descriere pentru proiectul 3.',
    projectLink: 'http://link-catre-proiectul-3.com',
    githubLink: 'http://github.com/link-catre-repo-3',
    status: 'completed'
  },
  {
    title: 'Proiectul 4',
    image: 'https://via.placeholder.com/400',
    description: 'Descriere pentru proiectul 4.',
    projectLink: 'http://link-catre-proiectul-4.com',
    githubLink: 'http://github.com/link-catre-repo-4',
    status: 'representative'
  }
];

const StatusIcon = ({ status }) => {
  switch (status) {
    case 'developing':
      return (
        <div className="status-icon">
          <MdAccessTime size={24} color="var(--text-color-navbar)" />
        </div>
      );
    case 'representative':
      return (
        <div className="status-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--text-color-navbar)"
            width="24px"
            height="24px"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
      );
    default:
      return null;
  }
};

export const Projects = () => {
  return (
    <div className="projects-section" id='projects'>
      <h1>Proiectele Mele</h1>
      <button className="add-button">
        <FaPlus />
      </button>
      <div className="projects-carousel">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <StatusIcon status={project.status} />
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <div className="button-container">
              <a href={project.projectLink} title='Live Page' target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
              <a href={project.githubLink} title='Github Link' target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="icon-container">
              <FaEdit className="icon" />
              <FaTrashAlt className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
