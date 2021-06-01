import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';
let items = [
  {
    name: "Multi-platform", 
    description: "Support for mobile and desktop platforms",
    img: <img style={{maxHeight: "500px"}} src={require('../images/devices.jpg')} alt='devices-img' />
  },
  {
    name: "Equipment Monitoring",
    description: "Better Off This Way (You want it you got it)",
    img: <img style={{maxHeight: "500px"}} src={require('../images/equipment.png')} alt='equipment-img' />
  },
  {
    name: "Statistical Data Aggregation",
    description: "View which building has a breakdown, monthly breakdowns and breakdowns per building",
    img: <img style={{maxHeight: "500px"}} src={require('../images/dashboard.png')} alt='dashboard-img' />
  },
  {
    name: "Job Management",
    description: "Easily manage jobs and view job details",
    img: <img style={{maxHeight: "500px"}} src={require('../images/jobs.png')} alt='job-img' />
  },
  {
    name: "Organise Your Team",
    description: "Fine tune member access with role based security.",
    img: <img style={{maxHeight: "500px"}} src={require('../images/roles.png')} alt='roles-img' />
  } 
]
export class Home extends Component {
  render() {
    return (
      <div>
        {/*About Us*/}
        <div className='section white text-dark' style={{minHeight: "200px"}}>
          <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>What is Monitor</h1>
                
                <Row className="d-flex justify-content-around">
                  <Col className="col-sm-12 col-md-12 col-lg-4 mt-5 pr-2">
                    <h4>Organisational Management</h4>
                    <div>Map your lift organisation, departments, jobs and lift equipment all in the one application</div>
                  </Col>
                  <Col className="col-sm-12 col-md-12 col-lg-4 mt-5 pr-2">
                    <h4>Internet of Things</h4>
                    <div>Bring your equipment to you, with IoT devices lift equipment can easily be monitored remotely with notifications being provided to the right people when equipment breaks down.</div>
                  </Col>
                  <Col className="col-sm-12 col-md-12 col-lg-4 mt-5 pr-2">
                    <h4>Data Aggregation</h4>
                    <div>Get insights into how often breakdowns are occurring and how many breakdowns are recorded for each building to better make operational decisions. 
                    </div>
                  </Col>
                </Row>
                <h4></h4>
                
                {/* <NavLink to='/about-us'><button className='btn btn-light'>More Info</button></NavLink> */}
              </div>
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            </div>
          </Container>
        </div>
        {/*Who uses monitor?*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,261.3C560,256,640,224,720,192C800,160,880,128,960,138.7C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div id='test' className='section text-light' style={{minHeight: "200px", backgroundColor: "#0099ff"}}>
            <Container className='pb-5'>
              <h1>Who Uses Monitor?</h1>
              <Row>
                <div>
                  Tradespersons and corporate staff in the lift industry will be able to manage jobs and locate job sites, manage organisational structures and track equipment statuses and operations remotely. Monitor is aimed at those who in the lift industry that want to increase operational efficiency by leveraging software management tools and IoT technology 
                </div>
              </Row>
            </Container>
            <div className="d-flex justify-content-center">
              <Col className="col-sm-12 col-md-12 col-lg-4">
                <div className='text-dark bg-light card-style'>
                  <h4>Tradespersons</h4>
                  <div>
                    Tradespersons in the lift industry will be able to easily locate building sites and view vital job information. Notifications for breakdowns will be supportive in faster information sharing to react faster and know more when lifts breakdown. Easily control and view equipment and IoT devices remotely.
                  </div>
                </div>
              </Col>
              <Col className="col-sm-12 col-md-12 col-lg-4">
                <div className='text-dark bg-light card-style'>
                  <h4>Corporate workers</h4>
                  <div>
                    Project managers, technical staff, and management staff in the lift industry will be able to elevate their business operations with Monitor's organisational management tools, remote equipment tracking and control tools. Operational statistics will provide insights to improve data driven business decisions.
                  </div>
                </div>
              </Col>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,261.3C560,256,640,224,720,192C800,160,880,128,960,138.7C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <Container style={{minHeight: "500px"}} className="pt-5">
          <div className="mt-5">
          <Container className='d-flex justify-content-center'>
              <h1>How does it work? Check it out!</h1>
            </Container>
            <Carousel className=""  style={{minHeight: "200px"}}>
              {
                  items.map( (item, i) => <Item key={i} item={item} /> )
              }
            </Carousel>
          </div>
        </Container>
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
        {/*About Us*/}
        {/* <div className='section dark-blue text-light'> */}
          {/* <Container>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>What is Monitor</h1>
                <h4>
                  A software development company with a unique approach to designing world class software for the construction and building industry. 
                </h4>
                <h4>
                Blending our extensive knowledge of the construction industry with our passion for software development, Monitor allows our clients to focus on what really matters, which is what happens on site. 
                </h4>
                <h4>We design, build and test using the latest technology, ensuring that we stay at the forefront of the market with software that can be scaled to meet the requirements of the small mum and dad companies up to large multinational organisations.</h4>
                <NavLink to='/about-us'><button className='btn btn-light'>More Info</button></NavLink>
              </div> */}
              {/*<div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>*/}
            {/* </div>
          </Container> */}
        {/* </div> */}
        {/*Solution*/}
        {/* <Container className='section'>
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
            <h5>User Management, Security and Access Control</h5>
            <li>Easy user management</li>
            <li>Easy encryption and decryption of secure files</li>
            <li>Easy management of access</li>
          </ul>
          <NavLink to='/access-control'><button className='btn btn-primary mb-2 custom-btn'>More Info</button></NavLink>
        </Container> */}
        
        {/*What monitor aims to address*/}
        {/* <div className='section light-blue text-light'>
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
            </div>
          </Container>
        </div> */}
        {/*Who We Cater For*/}
        {/* <div className='section'>
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
        </div> */}
        {/*Why do tradespeople choose monitor*/}
        {/* <div id='test' className='section light-blue-gradient text-light'>
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
        </div> */}
        {/*Design Methodology*/}
        {/* <Container className='section'>
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
        </Container> */}
        {/*Development Environment*/}
        {/* <div className='section dark-blue text-light'>
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
            </div>
          </Container>
        </div>    */}
        {/*Our Client*/}
        {/* <Container className='section'>
          <h1>Our Client</h1>
          <h4>
            MRB Lift installations Pty Ltd are a small elevator trade-based company who work for some of the biggest elevator   companies in the world. Comprising of a small team of tradespeople, they are hoping to develop an application that  will improve the information flow to their field staff and facilitate greater access to technical data from the  companies they undertake their work for.
            Their staff are young and tech savvy and using this application to bring their trade into the 21st century
          </h4>
        </Container> */}
        {/*Future Goals*/}
        {/* <hr/>
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
            </div>
          </Container>
        </div> */}
        {/*contact us*/}
      </div>
    );
  }
}
