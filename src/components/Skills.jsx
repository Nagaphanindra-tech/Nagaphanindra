import React from 'react';

const Skills = () => {
  const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'ReduxToolkit',
    'Redux-Saga',
    'Material-UI',
    'API Integration',
    'JWT Authentication',
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;