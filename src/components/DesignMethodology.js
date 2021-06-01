import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

export class DesignMethodology extends Component {
  render() {
    return (
      <div>
        {/*Solution*/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,261.3C560,256,640,224,720,192C800,160,880,128,960,138.7C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <Container className='section'  style={{minHeight: "200px", backgroundColor: "#0099ff"}}>
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
          <ul>
            <h5>User Management, Security and Access Control</h5>
            <li>Easy user management</li>
            <li>Easy encryption and decryption of secure files</li>
            <li>Easy management of access</li>
          </ul>
        </Container>
      
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,170.7C80,181,160,203,240,224C320,245,400,267,480,261.3C560,256,640,224,720,192C800,160,880,128,960,138.7C1040,149,1120,203,1200,218.7C1280,235,1360,213,1400,202.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
      </div>
    );
  }
}