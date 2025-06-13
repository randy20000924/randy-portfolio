import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AcademicExperience from './components/AcademicExperience';
import Awards from './components/Awards';
import photo from '../src/assets/photo.jpg';

class App extends Component {
  render() {

    const person = {
      avatar: photo,
      name: 'Yao-Lun(Randy) Chang',
      profession: 'Master of Electrical Engineering | Software Engineer',
      bio: "Software Engineer and Researcher with experience in ERP/CRM systems, AI for floorplan validation, and bioinformatics. Skilled in Python, JavaScript, C#, SQL, and modern web frameworks. Passionate about building robust solutions and collaborating with cross-functional teams.",
      address: 'Kelowna, BC | randy890924@gmail.com',
      social: [
        {name: 'envelope', url: 'randy890924@gmail.com'},
        {name: 'github', url: 'https://github.com/randy20000924'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/randychang890924/'},
        {name: 'facebook', url: 'https://www.facebook.com/ChangYaoLunRandy'}
      ],
      experience: [
        {
          jobKey: 1,
          jobTitle: 'Software Engineer',
          company: 'Marvel Business Systems Corp.',
          startDate: 'Jan 2024',
          endDate: 'May 2024',
          location: 'Taipei, Taiwan',
          jobDescription: [
            'Built ERP and CRM web modules with Java and RESTful APIs, enabling real-time customer analytics (10s latency) on purchasing patterns, demographics, and trends.',
            'Processed sales data for over 2M users of 100+ companies with MSSQL, optimizing analysis dashboard queries performance by 40%.',
            'Collaborated with cross-functional teams to define module requirements and deliver robust ERP/CRM solutions on schedule.',
            'Communicated analytics insights with stakeholders, improving business decision-making and team alignment.'
          ]
        },
        {
          jobKey: 2,
          jobTitle: 'Software Engineer Intern',
          company: 'Orderble Co. LTD.',
          startDate: 'May 2023',
          endDate: 'Aug 2023',
          location: 'Taipei, Taiwan',
          jobDescription: [
            'Created a signature application for tablets using .NET MAUI, C#, WebSocket, and UDP. Signature is displayed on the web front-end and stored in the database, reducing processing time by 30% and enhancing security.',
            'Designed and developed the front-end for the company using React.js.',
            'Spearheaded development of tablet-based signature application, coordinating with backend and frontend teams to ensure real-time syncing.'
          ]
        },
        {
          jobKey: 3,
          jobTitle: 'Software Engineer Intern',
          company: 'Turing Drive Inc.',
          startDate: 'Jul 2022',
          endDate: 'Aug 2022',
          location: 'New Taipei, Taiwan',
          jobDescription: [
            'Preprocessed autonomous vehicle data from AWS EC2 using Python and Node.js, including latitude, longitude, and time. Calculated vehicle speed, acceleration, and detected environmental objects.',
            'Deployed processed data to the front end for visualization, reducing maintenance costs and time by ~40%.',
            'Adapted to large-scale, unfamiliar datasets by designing flexible data parsing scripts for rapid prototyping and integration.'
          ]
        }
      ],
      education: [
        {
          degree: 'Master of Electrical Engineering',
          institution: 'University of British Columbia',
          startDate: 'Sep 2024',
          endDate: 'Present',
          description: ''
        },
        {
          degree: 'Bachelor of Computer Science',
          institution: 'Chang Gung University',
          startDate: 'Sep 2019',
          endDate: 'Jun 2023',
          description: ''
        }
      ],
      skills: [
        {name: 'Python', percentage: '90%'},
        {name: 'JavaScript', percentage: '85%'},
        {name: 'SQL', percentage: '80%'},
        {name: 'C/C++', percentage: '75%'},
        {name: 'Node.js', percentage: '80%'},
        {name: 'Flask', percentage: '75%'},
        {name: 'MSSQL', percentage: '70%'},
        {name: 'MongoDB', percentage: '70%'},
        {name: 'Docker', percentage: '70%'},
        {name: 'React.js', percentage: '80%'},
        {name: 'HTML', percentage: '90%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'Linux', percentage: '80%'},
        {name: 'LaTeX', percentage: '70%'},
        {name: 'SQLite', percentage: '70%'}
      ],
      projects: [
        {
          name: 'Building Code Validation System for Floorplan Generation Using GNN',
          date: 'Jan 2025 - Apr 2025',
          description: [
            'Developed an AI system to verify 2D floor plan compliance with BC Building Code by integrating OCR, NLP, and GAT-based graph classification models.',
            'Extracted room size and layout constraints from official government PDFs using web scraping and Transformer-based NLP models.',
            'Converted floor plans into graph structures and trained a GAT model that achieved 92% accuracy in predicting compliance status.',
            'Reduced rule extraction and labeling time by 60% through automated parsing and structured JSON generation from HTML and PDF sources.'
          ]
        },
        {
          name: 'PDF Cloud: Streamlined Document Solutions',
          date: 'Jan 2023 - Jun 2023',
          description: [
            'Developed a cross-platform PDF toolkit with web and Discord integration, supporting compression, conversion, and analysis via Flask.',
            'Improved decoding performance by 30% using Docker-based multi-threaded parser and implemented persistent job tracking.',
            'Led a team of 3 in building a PDF microservice platform with persistent job tracking and Docker-based deployment on Linux.'
          ]
        },
        {
          name: 'Multiple Sequence Alignment for Feature Extraction in RNA Prediction',
          date: 'Sep 2022 - Jan 2023',
          description: [
            'Designed a pipeline to align and encode RNA sequences from enteroviruses for evolutionary prediction using LSTM models.',
            'Improved sequence alignment quality with customized scoring and gap penalties, enhancing downstream model accuracy by 12%.',
            'Applied k-mer and physicochemical property extraction to enrich sequence-level features prior to deep learning modeling.',
            'Partnered with bioinformatics researchers to validate RNA features, contributing to a joint manuscript draft on viral evolution prediction.'
          ]
        }
      ],
      academicExperiences: [
        {
          position: 'Research Assistant',
          institution: 'University of British Columbia',
          date: 'Jan 2025 - Apr 2025',
          location: 'Kelowna, BC, Canada',
          description: [
            'Used OCR and Transformer-based NLP models to extract structured rules from the BC Building Code, and trained a GAT model to verify compliance of 2D floorplans based on these rules.',
            'Built an automated web crawler to extract and semantically parse building regulations for integration into a compliance verification pipeline.',
            'Initiated and led research direction on automated rule extraction, presenting findings in weekly lab meetings to faculty and peers.',
            'Documented pipeline architecture and deployed models in reproducible Jupyter notebooks, enhancing onboarding for future researchers.'
          ]
        }
      ],
      awards: [
        {
          name: 'Best Capstone Project Award',
          institution: 'Chang Gung University',
          date: 'May 2023',
          description: ''
        },
        {
          name: 'Honorable Mention Innovation Technology Competition',
          institution: 'Chang Gung University',
          date: 'Dec 2022',
          description: ''
        }
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
                <Education education={person.education} />
                <Experience experience={person.experience} />
                <AcademicExperience academicExperiences={person.academicExperiences} />
                <Projects projects={person.projects} />
                <Skills skills={person.skills} />
                <Awards awards={person.awards} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
