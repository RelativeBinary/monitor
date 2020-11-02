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
                  <NavLink to='/monitor/task-management'>
                    Tast Management
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/monitor/equipment-monitoring'>
                    Equipment Monitoring
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/monitor/organisation-management'>
                    Organisation Management
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/monitor/analytics'>Analytics</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              {/*Resources*/}
              <NavDropdown title='Resources'>
                <NavDropdown.Item>
                  <NavLink to='/monitor/user-manual'>User Manual</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink to='/monitor/security-features'>
                    Security Features
                  </NavLink>
                </NavDropdown.Item>
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
                <NavDropdown.Item>
                  <NavLink to='/monitor/style-guide'>Style Guide</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}
