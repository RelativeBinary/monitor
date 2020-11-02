import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

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
                  <NavLink to='/iot'>IoT</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/data-collection'>
                    Data Collection
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/document-management'>
                    Document Management
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/future-goals'>Future Goals</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              {/*Resources*/}
              <NavDropdown title='Resources' id='solutions-nav'>
                <NavDropdown.Item>User Guide</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Problem Description</NavDropdown.Item>
              </NavDropdown>
              {/*About*/}
              <NavDropdown title='About'>
                <NavDropdown.Item>
                  <NavLink to='/monitor/meet-the-team'>Meet The Team</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/monitor/technology-stack'>
                    Technology Stack
                  </NavLink>
                </NavDropdown.Item>
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
