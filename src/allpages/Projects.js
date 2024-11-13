import React, { useState } from 'react';
import { Github, ExternalLink, Globe, Smartphone } from "lucide-react";
import './Projects.css'; // Make sure to create this CSS file

const ProjectCard = ({ title, description, technologies, githubUrl, type }) => {
  return (
    <div className={`project-card ${type}`}>
      <div className="project-header">
        <div className="project-title-container">
          {type === 'web' ? (
            <Globe className="project-icon web" size={20} />
          ) : (
            <Smartphone className="project-icon mobile" size={20} />
          )}
          <h3 className="project-title">{title}</h3>
        </div>
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <Github size={20} />
        </a>
      </div>
      
      <div className="project-content">
        <p className="project-description">{description}</p>
        <div className="project-tags">
          <span className={`tag type-tag ${type}`}>
            {type === 'web' ? 'Web' : 'Mobile'}
          </span>
          {technologies.map((tech) => (
            <span key={tech} className="tag tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="project-footer">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="view-project"
        >
          View Project <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const FilterButton = ({ active, onClick, children }) => (
  <button
    className={`filter-button ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Fit AND FINDER',
      description: 'The Fit and Finder mobile app leverages Dart and Firebase to provide personalized clothing recommendations based on facial analysis.',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubUrl: 'https://github.com/rahulitme/Final_Year_Project',
      type: 'mobile'
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React and Next.js. Features dynamic content loading, dark mode support, and seamless animations.',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      type: 'web'
    },
    {
      title: 'Grocery App',
      description: 'A comprehensive mobile application that transforms grocery shopping with features like product browsing, cart management, order tracking, and seamless payments.',
      technologies: ['Flutter', 'Dart', 'State Management'],
      githubUrl: 'https://github.com/rahulitme/Grocery-App',
      type: 'mobile'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A web-based task management system with real-time updates, team collaboration features, and performance analytics.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/yourusername/task-dashboard',
      type: 'web'
    },
    {
      title: 'Clock App',
      description: 'A sophisticated daily reminder application that helps users manage their schedule. Features include customizable time picker, daily notifications, and persistent storage.',
      technologies: ['Flutter', 'Dart', 'Local Storage'],
      githubUrl: 'https://github.com/rahulitme/Daily_Reminder_App',
      deployurl: 'https://welcome-aa71e.web.app',
      type: 'mobile'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce website with product management, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      type: 'web'
    },
    {
      title: 'Bluetooth Beacon App',
      description: 'An innovative application for detecting and managing nearby Bluetooth devices. The app provides real-time device discovery and connection management capabilities.',
      technologies: ['Flutter', 'Dart', 'Bluetooth API'],
      githubUrl: 'https://github.com/rahulitme/-Bluetooth-_beacon_App',
      type: 'mobile'
    },
    {
      title: 'Event Application',
      description: 'A secure event management platform featuring phone authentication for user verification. The app streamlines event access and management while maintaining high security standards.',
      technologies: ['Flutter', 'Dart', 'Firebase Auth'],
      githubUrl: 'https://github.com/rahulitme/Event_Application',
      type: 'mobile'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Explore my portfolio of mobile and web applications built with modern technologies
          </p>
          
          <div className="filter-buttons">
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All Projects
            </FilterButton>
            <FilterButton 
              active={filter === 'web'} 
              onClick={() => setFilter('web')}
            >
              Web Projects
            </FilterButton>
            <FilterButton 
              active={filter === 'mobile'} 
              onClick={() => setFilter('mobile')}
            >
              Mobile Projects
            </FilterButton>
          </div>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;