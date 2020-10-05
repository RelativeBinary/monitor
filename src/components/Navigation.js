import React from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg='light' expand='lg'>
      <div className='d-flex ml-auto mr-auto'>
        <Navbar.Brand href='#home'>
          <img
            src={require('../images/logo-name.png')}
            alt='monitor-logo'
            width='100'
            height='60'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-4'>
            {/*Solutions*/}
            <NavDropdown title='Solutions' id='solutions-nav'>
              <NavDropdown.Item href='#action/1.1'>
                Task Management
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/1.2'>
                Equipment Monitoring
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/1.3'>
                Oraganisation Management
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/1.3'>Analytics</NavDropdown.Item>
            </NavDropdown>
            {/*Resources*/}
            <NavDropdown title='Resources' id='solutions-nav'>
              <NavDropdown.Item href='#action/2.1'>
                User Manual
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/2.2'>
                Security Features
              </NavDropdown.Item>
            </NavDropdown>
            {/*About*/}
            <NavDropdown title='About' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>
                Meet The Team
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.2'>
                Technology Stack
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.3'>
                Style Guide
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
