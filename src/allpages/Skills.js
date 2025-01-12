import React from 'react';
import { Code2, Smartphone, Database } from 'lucide-react';
import './skills.css';  // Updated import to match the lowercase filename

// SkillCard component
const SkillCard = ({ category, skills }) => {
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return <Code2 className="icon icon-blue" />;
      case 'mobile app  developemnts':
        return <Smartphone className="icon icon-purple" />;
      case 'datbase':
        return <Database className="icon icon-green" />;
      default:
        return <Code2 className="icon icon-blue" />;
    }
  };

  const getCategoryClass = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return 'skill-card frontend';
      case 'mobile app  developemnts':
        return 'skill-card mobile';
      case 'datbase':
        return 'skill-card database';
      default:
        return 'skill-card frontend';
    }
  };

  return (
    <div className={getCategoryClass(category)}>
      <div className="card-header">
        {getIcon(category)}
        <h2 className="card-title">{category}</h2>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

// Main Skills component
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['Html', 'Css', 'javascript', 'React js', 'Next.js']
    },
    {
      category: 'Mobile App  Developemnts',
      skills: ['flutter', 'Dart', 'java', 'Python']
    },
    {
      category: 'Datbase',
      skills: ['mysql', 'firebase']
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-header">
          <h1 className="skills-title">Technical Skills</h1>
          <div className="title-underline"></div>
          <p className="skills-subtitle">
            A showcase of my technical expertise and professional skill set
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map(category => (
            <SkillCard key={category.category} {...category} />
          ))}
        </div>

        <div className="skills-footer">
          <p>Continuously learning and expanding my skill set...</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;