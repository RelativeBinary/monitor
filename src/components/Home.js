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
        <div className='section dark-blue text-light'>
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
          <NavLink to='/iot'><button className='btn btn-primary mb-2 custom-btn'>More Info</button></NavLink>
          <ul>
            <h5>Documentation management</h5>
            <li>Document upload</li>
            <li>Security and access control</li>
            <li>Digitised manuals, product information guides and technical drawings</li>
            <li>Document search capabilities</li>
          </ul>
          <NavLink to='/document-management'><button className='btn btn-primary mb-2 custom-btn'>More Info</button></NavLink>
          <ul>
            <h5>User Management, Security and Access Control</h5>
            <li>Easy user management</li>
            <li>Easy encryption and decryption of secure files</li>
            <li>Easy management of access</li>
          </ul>
          <NavLink to='/access-control'><button className='btn btn-primary mb-2 custom-btn'>More Info</button></NavLink>
        </Container>
        {/*What monitor aims to address*/}
        <div className='section light-blue text-light'>
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
                <NavLink to='/problem'><button className='btn btn-light'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*Who We Cater For*/}
        <div className='section'>
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
        {/*Why do tradespeople choose monitor*/}
        <div id='test' className='section light-blue-gradient text-light'>
          <div className='grid-2-parent'>
            <div className='grid-2-child-1'>
              <h1>Why do tradespeople choose Monitor?</h1>
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
                We're a team build around collaboration and a drive for creating innovative solutions.
              </div>
            </div>
            <div className='grid-2-child-6 text-dark bg-light card-style'>
              <h4>Cutting edge technology</h4>
              <div>
              Monitor is designed to use the latest technology with easy to update and upgrade platforms, ensuring you and your business are keeping with the times.
              </div>
            </div>
            <div className='grid-2-child-7 text-dark bg-light card-style'>
              <h4>Improved security for proprietary information</h4>
              <div>
                Secure your manuals and technical documents at the click of the button, ensuring that your organisations sensitive information is kept private
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
          <NavLink to='/design-methodology'><button className='btn btn-primary custom-btn'>More Info</button></NavLink>
        </Container>
        {/*Development Environment*/}
        <div className='section dark-blue text-light'>
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
        {/*Our Client*/}
        <Container className='section'>
          <h1>Our Client</h1>
          <h4>
            MRB Lift installations Pty Ltd are a small elevator trade-based company who work for some of the biggest elevator   companies in the world. Comprising of a small team of tradespeople, they are hoping to develop an application that  will improve the information flow to their field staff and facilitate greater access to technical data from the  companies they undertake their work for.
            Their staff are young and tech savvy and using this application to bring their trade into the 21st century
          </h4>
        </Container>
        {/*Future Goals*/}
        <hr/>
        <div className='section'>
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
                <NavLink to='/problem'><button className='btn btn-primary custom-btn'>More Info</button></NavLink>
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*contact us*/}
        <div className='section blue-navy text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Contact Us</h1>
                  <h5>Address:</h5>
                  <ul>
                    <li>Northfields Ave, Wollongong NSW 2522</li>
                  </ul>
                  
                  <h5>Email:</h5>
                  <ul>
                    <li>mrb242@uowmail.edu.au</li>
                  </ul>
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
