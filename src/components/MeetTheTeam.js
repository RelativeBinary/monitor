import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export class MeetTheTeam extends Component {
  render() {
    return (
      <div className='section'>
          <Container>
            <h1>Meet The Team</h1>
            <hr className='pb-3' />
            {/*Team Member Card - Matt*/}
            <div class='p-4 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/matt.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Matthew Belgre</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Matt has a long history in the construction industry, completing an Electrical  apprenticeship, before starting a successful small business in the elevator industry. Hestarted studying computer science as a result of an injury sustained at work and quickly realised the applications of such technologies when applied to the construction and trade industry. He is focused on creating technologies for tradespeople and making their lives easier by providing them greater access to information and data.</p>
                    <h2>Roles</h2>
                    <p>Team Leader - Full Stack Developer - Product Owner</p>
                    <h2>Responsibilities</h2>
                    <p>Organise resources and direct the project. Work in various areas of the projects design and development.</p>
                    <h2>Skills</h2>
                    <ul>
                      <li>Java and Spring framework</li>
                      <li>C++</li>
                      <li>Python</li>
                      <li>React Native</li>
                      <li>Javascript</li>
                      <li>HTML, CSS</li>
                      <li>MongoDB</li>
                      <li>Raspberry Pi</li>
                    </ul>
                  </p>
                </div>
                </div>
                
              </div>
            </div>
            {/*Team Member Card - Manik*/}
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/manik.jpg')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Manik Bagga</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Manik has had in interest in working in computers since he was at a very young age. He was accepted into his course early due to his marks during high school. His approachable and friendly attitude make him an excellent contact point for clients to converse with and lets leads him to a better understanding of their requirements.</p>
                    <h2>Roles</h2>
                    <p>UI Designer - Software Engineer - Full Stack Developer</p>
                    <h2>Responsibilities</h2>
                    <p>Design the main components of the UI and assist the team with Front end and Back end development.</p>
                    <h2>Skills</h2>
                    <ul>
                      <li>Java</li>
                      <li>C/C++</li>
                      <li>HTML, CSS</li>
                      <li>MongoDB</li>
                      <li>SQL</li>
                      <li>Raspberry Pi</li>
                    </ul>
                  </p>
                </div>
                </div>
              </div>
            </div>
            {/*Team Member Card - Chris*/}
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/chris-2.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Chris Bautista</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Chris is responsible for the quality management and documentation of Monitor (his background is in accounts, HR and ISO certification), as well as helping consult with the interface design and implementing the front end. He enjoys the creative, supportive and administrative aspects of his role in the team. In his spare time, he enjoys video games and casual artist. At university, he is aiming for the Game and Mobile Development major.</p>
                    <h2>Roles</h2>
                    <p>Quality and Documentation Manager - Mobile Application Developer</p>
                    <h2>Responsibilities</h2>
                    <p>Collate team input for checking and finalisation. Implementing the mobile front end.</p>
                    <h2>Skills</h2>
                    <ul>
                      <li>Java</li>
                      <li>C++</li>
                      <li>Andriod Studio</li>
                      <li>React Native/Webstorm</li>
                      <li>JavaScript</li>
                      <li>HTML, CSS</li>
                      <li>Raspberry Pi</li>
                    </ul>
                  </p>
                </div>
                </div>
                
              </div>
            </div>
           {/*Team Member Card - Molin*/}
           <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/molin-1.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Molin Lai</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Molin is a passionate computer science student with a flair for art and design. She is passionate about creating great user centred products that have an intuitive feel and a great look. Molin has been largely responsible for the way the Monitor application looks and feels and has used her passion for art to transform Monitor into what it looks like today.</p>
                    <h2>Roles</h2>
                    <p>UI Designer - Graphic Designer</p>
                    <h2>Responsibilities</h2>
                    <p>Leading and collaborating with the team to create highly usable user interfaces that are appropriate to the target market.</p>
                    <h2>Skills</h2>
                    <ul>
                      <li>C++</li>
                      <li>Database Performance tuning</li>
                      <li>SQL</li>
                      <li>C language</li>
                      <li>UI Design</li>
                      <li>Presentation</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Team Member Card - Patrick*/}
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/pat.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Patrick Bornay</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Patrick has an innate ability to remain calm under extreme pressure and maximise the value of a client’s most valuable asset under any market condition. His sensitive and confidential approach to any sale makes him suited to this very competitive industry. </p>
                    <h2>Roles</h2>
                    <p>Software Engineer - Full Stack Developer</p>
                    <h2>Responsibilities</h2>
                    <p>Leading and assisting the team in the delivery of design goals and development goals. Ensuring that technical implementations of functional requirements. </p>
                    <h2>Skills</h2>
                    <ul>
                      <li>Java & Spring Boot</li>
                      <li>Javascript & React Native/ReactJS</li>
                      <li>C++</li>
                      <li>AWS EC2 server hosting</li>
                      <li>Raspberry Pi</li>
                      <li>Command line</li>
                      <li>CompTIA Security+ SY0-501 Certification</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
    );
  }
}
