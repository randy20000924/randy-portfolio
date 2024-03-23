import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';


const styles = {
  ResBtn: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#553075',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  MailBtn: {
    display: 'inline-block',
    padding: '10px 17px',
    fontSize: '16px',
    backgroundColor: '#547388',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

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
        <a href={'https://drive.google.com/file/d/1vMApecGcZ2l_iO4zSuVHPDw6JvbEG7zE/view?usp=drive_link'} target='_blank' rel="noopener noreferrer" style={styles.ResBtn}>Resume</a>
      </div>
      <div style={{ marginTop: '15px' }}>
        <a href={`mailto:${'randy890924@gmail.com'}`} target='_blank' rel="noopener noreferrer" style={styles.MailBtn} >Email Me</a>
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
