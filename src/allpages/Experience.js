import React from 'react';
import { Building2, Calendar, Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Coding Raze',
      role: 'Virtual Intern',
      duration: 'Jul 2021 - Sep 2021',
      description: 'Worked on two projects: Resume Builder and Music Player.',
      projects: [
        {
          name: 'Resume Builder',
          description: 'Developed a web application to create and download resumes.'
        },
        {
          name: 'Music Player',
          description: 'Built a music player application with playlist management features.'
        }
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="experience-header">
          <h1 className="experience-title">Professional Experience</h1>
          <div className="title-underline"></div>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-header">
                <div className="company-info">
                  <div className="company-details">
                    <div className="company-name">
                      <Building2 className="icon icon-large" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="role-title">
                      <Briefcase className="icon icon-medium" />
                      <span>{exp.role}</span>
                    </div>
                    <div className="duration">
                      <Calendar className="icon icon-small" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <p className="description">{exp.description}</p>
                {exp.projects && (
                  <div className="projects-section">
                    <h4 className="projects-title">Key Projects</h4>
                    <div className="projects-grid">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="project-card">
                          <h5 className="project-name">{project.name}</h5>
                          <p className="project-description">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;