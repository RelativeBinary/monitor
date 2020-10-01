import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <body className='App'>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        crossorigin='anonymous'
      />
      <link href='./App.css' rel='stylesheet' type='text/css' />
      <Navbar bg='light' expand='lg'>
        <div className='d-flex ml-auto mr-auto'>
          <Navbar.Brand href='#home'>Monitor</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-4'>
              <Nav.Link href='#home'>Solutions</Nav.Link>
              <Nav.Link href='#link'>Resources</Nav.Link>
              <NavDropdown title='About' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/*Section*/}
      <div className='section blue-gradient text-light'>
        <Container>
          <div className='grid-1-parent'>
            <div className='grid-1-child-1'>
              <h1>The frontline digital workplace</h1>
              <h4>
                The platform industry leaders choose to unleash the full
                potential of their non-desk workforces.
                <h4>Built for the complexities of your business.</h4>
              </h4>
            </div>

            <div className='grid-1-child-2 phone-image-container'>
              <img src={require('./images/iphone-x.png')} />
            </div>
          </div>
        </Container>
      </div>
      {/*Section*/}
      <Container className='section'>
        <h1>Proven ROI of more than 400%</h1>
        <h1>Millions in cost savings</h1>
        <h1>Rapid payback</h1>
        <div>
          WorkJam commissioned Forrester Consulting to conduct a Total Economic
          Impact™ (TEI) study and objectively examine the potential ROI that
          organizations may realize by deploying its WorkJam’s Digital
          Workplace. The study provides readers and prospects with a framework
          to evaluate the potential financial impact of WorkJam’s Digital
          Workplace on their organizations.
        </div>
      </Container>
      {/*Section*/}
      <div className='section washed-blue-gradient text-light'>
        <Container>
          <div className='grid-1-parent'>
            <div className='grid-1-child-1'>
              <h1>The frontline digital workplace</h1>
              <h4>
                The platform industry leaders choose to unleash the full
                potential of their non-desk workforces.
                <h4>Built for the complexities of your business.</h4>
              </h4>
            </div>

            <div className='grid-1-child-2 phone-image-container'>
              <img src={require('./images/iphone-x.png')} />
            </div>
          </div>
        </Container>
      </div>
      {/*Section*/}
      <div className='section washed-blue-purple-gradient text-light'>
        <Container>
          <div className='grid-1-parent'>
            <div className='grid-1-child-1'>
              <h1>The frontline digital workplace</h1>
              <h4>
                The platform industry leaders choose to unleash the full
                potential of their non-desk workforces.
                <h4>Built for the complexities of your business.</h4>
              </h4>
            </div>

            <div className='grid-1-child-2 phone-image-container'>
              <img src={require('./images/iphone-x.png')} />
            </div>
          </div>
        </Container>
      </div>
      {/*Section*/}
      <Container className='section'>
        <h1>Proven ROI of more than 400%</h1>
        <h1>Millions in cost savings</h1>
        <h1>Rapid payback</h1>
        <div>
          WorkJam commissioned Forrester Consulting to conduct a Total Economic
          Impact™ (TEI) study and objectively examine the potential ROI that
          organizations may realize by deploying its WorkJam’s Digital
          Workplace. The study provides readers and prospects with a framework
          to evaluate the potential financial impact of WorkJam’s Digital
          Workplace on their organizations.
        </div>
      </Container>
      {/*Cards*/}
      <div className='section washed-red-yellow-gradient text-light'>
        <div className='grid-2-parent'>
          <div className='grid-2-child-1'>
            <h1>Why do enterprises choose WorkJam?</h1>
            <h4>
              To simplify and optimize the communication and management of their
              hourly workforces with modern technology integrated with their
              existing systems through a single employee application
            </h4>
          </div>
          <div className='grid-2-child-2 text-dark bg-light card-style'>
            <h4>Employee self-service</h4>
            <div>
              Optimize labor and employee engagement by reducing manager
              workloads and giving employees the tools to easily manage
              availability, time off, schedule changes, swaps, filling open
              shifts and more.
            </div>
          </div>
          <div className='grid-2-child-3 text-dark bg-light card-style'>
            <h4>Armed with knowledge</h4>
            <div>
              Empower associates to be more knowledgeable and connected to offer
              superior customer service and become effective brand ambassadors.
            </div>
          </div>
          <div className='grid-2-child-4 text-dark bg-light card-style'>
            <h4>Connect in real time</h4>
            <div>
              Break down walls and open the channels of communication between
              head office, managers and the frontline workforce. Keep all
              communication within your organization and off unsecure public
              messaging and social media platforms like WhatsApp and Facebook.
            </div>
          </div>
          <div className='grid-2-child-5 text-dark bg-light card-style'>
            <h4>Inspire shining stars</h4>
            <div>
              Survey, reward and share feedback with your workforce. Recognize
              and get your stars to shine.
            </div>
          </div>
          <div className='grid-2-child-6 text-dark bg-light card-style'>
            <h4>Unlock productivity</h4>
            <div>
              Improve productivity through better task execution, higher
              retention, better labor efficiency and lower costs.
            </div>
          </div>
          <div className='grid-2-child-7 text-dark bg-light card-style'>
            <h4>Total workforce engagement</h4>
            <div>
              Improve employee experience through improved flexibility, choice
              and better communication. Engage your workforce to deliver the
              ultimate Customer Experience.
            </div>
          </div>
        </div>
      </div>
      {/*Meet The Team*/}
      <div className='section'>
        <Container>
          <hr class='pb-4' />
          <div className='pb-4'>
            {/*Team Member */}
            <div className='col-xl-3 col-sm-6'>
              <div className='team-card-style-1 mx-auto'>
                <div className='team-card-inner'>
                  <div className='team-thumb'>
                    <img
                      src={require('./images/dio.png')}
                      alt='Team Member Picture'
                    />
                  </div>
                  <div className='team-social-bar text-center'>
                    <a href='#' className='social-btn sb-style-4 sb-twitter'>
                      <i className='socicon-twitter'></i>
                    </a>
                    <a class='social-btn sb-style-4 sb-stackoverflow' href='#'>
                      <i class='socicon-stackoverflow'></i>
                    </a>
                    <a class='social-btn sb-style-4 sb-skype' href='#'>
                      <i class='socicon-skype'></i>
                    </a>
                  </div>
                  <a class='team-contact-link' href='tel:+19871625346'>
                    <i class='fe-icon-phone'></i>&nbsp;+1 (987) 162 53 46
                  </a>
                  <a class='team-contact-link' href='mailto:info@example.com'>
                    <i class='fe-icon-mail'></i>&nbsp;info@example.com
                  </a>
                </div>
                <span className='team-position'>Lead Programmer</span>
                <h4 className='team-name'>William Smith</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </body>
  );
}

export default App;
