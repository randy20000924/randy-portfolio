import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.jobKey}>
          <h3>
            <span style={{ fontWeight: 'bold' }}>{exp.company}</span> <br />
            <span style={{ fontStyle: 'italic' }}>{exp.jobTitle}</span>
            <span className='datePosition'>{exp.startDate} - {exp.endDate} <span style={{ fontStyle: 'italic', marginLeft: '10px' }}>{exp.location}</span></span>
          </h3>
          <ul>
            {exp.jobDescription.map((desc, index) => (
              <li key={index} className='jobDescriptionItem'>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-briefcase'></i>
      <h2>WORK EXPERIENCE</h2>
      {myExperience}
    </div>
  )
};

export default Experience;
