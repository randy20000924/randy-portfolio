import React from 'react';

const Projects = (props) => {
  const myProjects = (
    <div>
      {props.projects.map((proj, idx) =>
        <div className='item' key={proj.name + idx}>
          <h3>{proj.name} <span className='datePosition'>{proj.date}</span></h3>
          <ul>
            {proj.description.map((desc, i) => (
              <li key={i} className='jobDescriptionItem'>{desc}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-folder-open'></i>
      <h2>PROJECTS</h2>
      {myProjects}
    </div>
  )
};

export default Projects; 