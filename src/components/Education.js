import React from 'react';

const Education = (props) => {
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree}>
          <h3><span style={{ fontStyle: 'italic' }}>{edu.degree}</span> | {edu.institution} <span className='datePosition'>{edu.startDate} - {edu.endDate}</span></h3>
          <p>{edu.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-graduation-cap'></i>
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  )
};

export default Education;
