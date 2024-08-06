import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.jobKey}>
          <h3>{exp.jobTitle} | {exp.company} <span className='datePosition'>{exp.startDate} - {exp.endDate}</span></h3>
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
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  )
};

export default Experience;
