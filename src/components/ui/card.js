import React from 'react';
import './Card.css'; // Assuming you have a CSS file for styling

const Card = ({ title, description, technologies, image, githubUrl }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-technologies">
          {technologies.map(tech => (
            <span key={tech} className="card-technology">{tech}</span>
          ))}
        </div>
        {githubUrl && (
          <a href={githubUrl} className="card-github-link" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;