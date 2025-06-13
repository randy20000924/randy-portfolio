import React from 'react';

const Awards = (props) => {
  const myAwards = (
    <div>
      {props.awards.map((award) =>
        <div className='item' key={award.name}>
          <h3>{award.name} | {award.institution} <span>{award.date}</span></h3>
          <p>{award.description}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-trophy'></i>
      <h2>AWARDS</h2>
      {myAwards}
    </div>
  )
};

export default Awards; 