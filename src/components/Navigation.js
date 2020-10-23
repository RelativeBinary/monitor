import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <div className='d-flex ml-auto mr-auto'>
          <NavLink to='/monitor'>
            <Navbar.Brand>
              <img
                src={require('../images/logo-name.png')}
                alt='monitor-logo'
                width='100'
                height='60'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-4'>
              {/*Solutions*/}
              <NavDropdown title='Solutions' id='solutions-nav'>
                <NavDropdown.Item>
                  <NavLink to='/task-management'>Task Management</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/equipment-monitoring'>
                    Equipment Monitoring
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/organisation-management'>
                    Organisation Management
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/analytics'>Analytics</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              {/*Resources*/}
              <NavDropdown title='Resources' id='solutions-nav'>
                <NavDropdown.Item>User Manual</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Security Features</NavDropdown.Item>
              </NavDropdown>
              {/*About*/}
              <NavDropdown title='About' id='basic-nav-dropdown'>
                <NavDropdown.Item>Meet The Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Technology Stack</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Style Guide</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to='/about-us'>About Us</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
