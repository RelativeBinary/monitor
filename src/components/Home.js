import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        {/*About Us*/}
        <div className='section blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>About us</h1>
                <h4>
                  A software development company with a unique approach to designing world class software for the construction and building industry. 
                </h4>
                <h4>
                Blending our extensive knowledge of the construction industry with our passion for software development, Monitor allows our clients to focus on what really matters, which is what happens on site. 
                </h4>
                <h4>We design, build and test using the latest technology, ensuring that we stay at the forefront of the market with software that can be scaled to meet the requirements of the small mum and dad companies up to large multinational organisations.</h4>
                <NavLink to='/about-us'><button className='btn btn-light'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*Solution*/}
        <Container className='section'>
          <h1>Why Choose Monitor?</h1>
          <h4>
            Monitor will provide an all-in-one software solution that will assist tradesmen and project managers in performing business operations.
          </h4>
          <ul>
            <h5>IoT monitoring and control</h5>
            <li>Improved IoT security</li>
            <li>Fault notification and logging </li>
            <li>Data collection</li>
          </ul>
          <NavLink to='/iot'><button className='btn btn-primary mb-2'>More Info</button></NavLink>
          <ul>
            <h5>Documentation management</h5>
            <li>Document upload</li>
            <li>Security and access control</li>
            <li>Digitised manuals, product information guides and technical drawings</li>
            <li>Document search capabilities</li>
          </ul>
          <NavLink to='/document-management'><button className='btn btn-primary'>More Info</button></NavLink>
        </Container>
        {/*What monitor aims to address*/}
        <div className='section washed-blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>What Monitor Hopes to Address</h1>
                <h4>
                Some of the major issues faced by the construction and trade sector:
                </h4>
                <ul>
                  <li>Underutilisation of technology in the construction and service industry </li>
                  <li>Inefficient communication channels</li>
                  <li>Lack of IoT utilisation for distributed systems particularly in small companies</li>
                  <li>Inefficiencies in staff deployment to breakdowns and repairs</li>
                  <li>Inefficient transfer of data to relevant field staff</li>
                  <li>Inability to access required technical documentation for repairs</li>
                  <li>Lack of security in information sharing</li>
                  <li>Lack of digital access to required documents</li>
                </ul>
                <NavLink to='/problem'><button className='btn btn-primary'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*Our Client*/}
        <div className='section washed-blue-purple-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Who We Cater For</h1>
                <h4>
                Monitor is being developed with tradespeople in mind and will look to focus on the construction and building industry.
                </h4>
                <ul>
                  <li>Organisations</li>
                  <li>Tradespeople</li>
                  <li>Subcontractors</li>
                  <li>Project managers</li>
                  <li>Organisations that provide service for electrical and mechanical systems or any system that has sensors</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        {/*What monitor aims to address*/}
        <Container className='section'>
          <h1>Our Client</h1>
          <h4>
            MRB Lift installations Pty Ltd are a small elevator trade-based company who work for some of the biggest elevator   companies in the world. Comprising of a small team of tradespeople, they are hoping to develop an application that  will improve the information flow to their field staff and facilitate greater access to technical data from the  companies they undertake their work for.
            Their staff are young and tech savvy and using this application to bring their trade into the 21st century
          </h4>
        </Container>
        {/*Why do tradespeople choose monitor*/}
        <div className='section washed-red-yellow-gradient text-light'>
          <div className='grid-2-parent'>
            <div className='grid-2-child-1'>
              <h1>Why do tradespeople choose Monitor?</h1>
              <h4>
                Incididunt officia magna dolor anim excepteur eiusmod elit.
              </h4>
            </div>
            <div className='grid-2-child-2 text-dark bg-light card-style'>
              <h4>Industry Experience</h4>
              <div>
              Our team members have worked in the industry in a variety of technical and non-technical roles, cultivating in the development of the Monitor Application
              </div>
            </div>
            <div className='grid-2-child-3 text-dark bg-light card-style'>
              <h4>Better ability to deploy and organise staff</h4>
              <div>
              Deploy staff automatically without the need for call centre and office staff
              </div>
            </div>
            <div className='grid-2-child-4 text-dark bg-light card-style'>
              <h4>Improved fault diagnosis</h4>
              <div>
              Secure your manuals and technical documents at the click of the button, ensuring that your organisations sensitive information is kept private
              </div>
            </div>
            <div className='grid-2-child-5 text-dark bg-light card-style'>
              <h4>Young passionate team</h4>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                libero tempore alias!
              </div>
            </div>
            <div className='grid-2-child-6 text-dark bg-light card-style'>
              <h4>Cutting edge technology</h4>
              <div>
              Monitor is designed to use the latest technology with easy to update and upgrade platforms, ensuring you and your business are keeping with the times.
              </div>
            </div>
            <div className='grid-2-child-7 text-dark bg-light card-style'>
              <h4>Lorem, ipsum dolor.</h4>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                repellat provident, corporis id soluta dignissimos consectetur
                reiciendis debitis veniam sapiente?
              </div>
            </div>
          </div>
        </div>
        {/*Design Methodology*/}
        <Container className='section'>
          <h1>How Do We Design?</h1>
          <h4>
          Monitor designs, tests and builds using the latest proven development methodologies, ensuring that we are as efficient as possible 
          </h4>
          <h4>
          Key benefits of using this methodology:
          </h4>
          <ul>
            <li>Quicker release of new functionality and software components</li>
            <li>Better quality product</li>
            <li>Better productivity</li>
            <li>Lower costs</li>
            <li>A better ability to cope and adapte to change</li>
            <li>Better employee morale</li>
            <li>Greater user satisfaction</li>
            <li>Ability to complete complex projects that may not hae been possible</li>
          </ul>
          <NavLink to='/design-methodology'><button className='btn btn-primary'>More Info</button></NavLink>
        </Container>
        {/*Development Environment*/}
        <div className='section washed-blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Our Technology Stack</h1>
                <h4>
                  Monitor will deliver its product by utilising some of the latest Jetbrains environments
                </h4>
                <ul>
                  <li>Webstorm</li>
                  <li>IntelliJ</li>
                  <li>PyCharm</li>
                  <li>DataGrip</li>
                  <li>Raspberry Pi</li>
                  <li>Github</li>
                </ul>
                <NavLink to='/technology'><button className='btn btn-light'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*Meet The Team*/}
        <div className='section'>
          <Container>
            <h1>Meet The Team</h1>
            <hr className='pb-3' />
            {/*Team Member Card*/}
            <div class='p-4 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/fancy.png')}
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
            {/*Team Member Card*/}
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
                    <p>Matt has a long history in the construction industry, completing an Electrical apprenticeship, before starting a successful small business in the elevator industry. Hestarted studying computer science as a result of an injury sustained at work and quickly realised the applications of such technologies when applied to the construction and trade industry. He is focused on creating technologies for tradespeople and making their lives easier by providing them greater access to information and data.</p>
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
            {/*Team Member Card*/}
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/fancy.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Chris Bautista</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Chris is responsible for the quality management and documentation of Monitor, as well as helping consult with the interface design and implementing the front end. 
He enjoys the creative, supportive and administrative aspects of his role in the team.
In his spare time, he is an avid video-game player and casual artist. At university, he is aiming for the Game and Mobile Development major.</p>
                    <h2>Roles</h2>
                    <p>test</p>
                    <h2>Responsibilities</h2>
                    <p>test</p>
                    <h2>Skills</h2>
                    <ul>
                      
                    </ul>
                  </p>
                </div>
                </div>
                
              </div>
            </div>
           {/*Team Member Card*/}
           <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/fancy.png')}
                    alt='pic'
                    class='pic'
                  />
                </div>
                <div class='d-flex flex-column pl-4'>
                  <h1>Molin Lai</h1>
                  <p>
                    <h2>Biography</h2>
                    <p>Cupidatat officia duis laboris ut irure irure. Duis pariatur officia occaecat ipsum anim fugiat exercitation est eiusmod do laboris amet. Nostrud enim cupidatat minim est dolor est do nostrud amet sint qui culpa ut exercitation.</p>
                    <h2>Roles</h2>
                    <p></p>
                    <h2>Responsibilities</h2>
                    <p></p>
                    <h2>Skills</h2>
                    <ul>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Team Member Card*/}
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class="row justify-content-center">
                <div class='pic-wrap'>
                  <img
                    src={require('../images/fancy.png')}
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
      
        {/*Future Goals*/}
        <div className='section blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Coming Soon...</h1>
                <ul>
                  <li>Task management</li>
                  <li>Digital Licensing</li>
                  <li>Machine learning and predictive analysis</li>
                  <li>Online form creation</li>
                </ul>
                <NavLink to='/problem'><button className='btn btn-light'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
