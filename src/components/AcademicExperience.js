import React from 'react';

const AcademicExperience = (props) => {
  const myAcademicExperiences = (
    <div>
      {props.academicExperiences.map((exp, idx) =>
        <div className='item' key={exp.position + idx}>
          <h3>
            <span style={{ fontWeight: 'bold' }}>{exp.position}</span> | {exp.institution}
            <span className='datePosition'>{exp.date} <span style={{ fontStyle: 'italic', marginLeft: '10px' }}>{exp.location}</span></span>
          </h3>
          <p>{exp.summary}</p>
          <ul>
            {exp.description.map((desc, i) => (
              <li key={i} className='jobDescriptionItem'>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <h2>ACADEMIC EXPERIENCES</h2>
      {myAcademicExperiences}
    </div>
  )
};

export default AcademicExperience; 