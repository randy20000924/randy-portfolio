import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';

const About = ({ avatar, name, profession, bio, address, social }) => {
  return (
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <div>
        <a href={'https://drive.google.com/file/d/1vMApecGcZ2l_iO4zSuVHPDw6JvbEG7zE/view?usp=drive_link'} target='_blank' rel="noopener noreferrer" className='ResBtn'>Resume</a>
      </div>
      <div style={{ marginTop: '15px' }}>
        <a href={`mailto:${'randy890924@gmail.com'}`} target='_blank' rel="noopener noreferrer" className='MailBtn' >Email Me</a>
      </div>
      <Social social={social} />
    </div>
  );
};

About.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  social: PropTypes.node
};

export default About;
