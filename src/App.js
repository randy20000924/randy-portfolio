import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import photo from '../src/assets/photo.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: photo,
      name: 'YAO-LUN CHANG',
      profession: 'Software Developer',
      bio: "Hi there! 👋 I'm YAO-LUN CHANG, a Software Developer with a passion for building cutting-edge solutions. With expertise in developing ERP and CRM systems, I thrive on creating user experiences and leveraging data-driven insights. I love collaborating with teams to turn ideas into reality and staying updated with the latest tech trends. Let's innovate together! 🚀 ",
      address: 'Taipei, Taiwan.',
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/ChangYaoLunRandy'},
        {name: 'envelope', url: 'randy890924@gmail.com'},
        {name: 'github', url: 'https://github.com/randy20000924'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/randychang890924/'}
      ],
      experience: [
        {jobKey: 1, jobTitle: 'Intern', company: 'Turing Drive', startDate: 'Jul 2022', endDate: 'Aug 2022', jobDescription: ['Using Restful APIs and Java to build ERP and CRM pages, enabling users to analyze their customer data in 10 seconds such as purchasing patterns, customer demographics, sales trends, and support interactions, thereby enhancing decision-making and improving customer satisfaction.', 'Utilize MSSQL to process sales information for over 1M users, optimizing customer analysis reports, including average sales amount, store sales ranking, average customer repurchase frequency, and other business information.']},
        {jobKey: 2, jobTitle: 'Software Engineer', company: 'Orderble Co., Ltd.', startDate: 'May 2023', endDate: 'Aug 2023', jobDescription: ['Created a signature application for tablets using .NET MAUI, C#, WebSocket, and UDP. Upon completion, the signature is immediately displayed on the web front-end and stored in the database, reducing the processing time by 30% and enhancing the security of the signature application.', 'Design and develop the front-end for the company using React.js.']},
        {jobKey: 3, jobTitle: 'Software Engineer', company: 'Marvel Business Systems Corp.', startDate: 'Sep 2023', endDate: 'Jun 2024', jobDescription: ['Preprocess autonomous vehicle data from an AWS EC2 database using Python and Node.js, including data such as latitude, longitude, and time. Calculate vehicle speed, acceleration, and detect environmental objects. Deploy the processed data to the front end for visualization, reducing maintenance costs and time by approximately 40%.']},
      ],
      education: [
        {degree: 'Bachelor of Computer Science', institution: 'Chang Gung University', startDate: 'September 2019', endDate: 'June 2023', description: ''},
        {degree: 'Master of Eletrical Engineering', institution: 'University Of British Columbia', startDate: 'Sep 2024', endDate: 'Present', description: ''},
      ],
      skills: [
        {name: 'HTML5', percentage: '90%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '85%'},  
        {name: 'Python', percentage: '70%'},  
        {name: 'Java', percentage: '50%'},  
        {name: 'SQL', percentage: '70%'}, 
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
