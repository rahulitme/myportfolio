import React from 'react';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{category}</h2>
      <ul className="list-disc list-inside">
        {skills.map(skill => (
          <li key={skill} className="text-gray-700">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;