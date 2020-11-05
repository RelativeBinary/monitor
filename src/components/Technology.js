import React, { Component } from 'react';

export class Technology extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        
        <div className='documentation-card m-5 p-4 col-7'>
          {/* Webstorm */}
          <h1>Webstorm</h1>
          <p>JavaScript is one of the most commonly used software languages on the planet. Monitor will utilise its use designing a React Native application, allowing for both IOS and Android deployment at the cost of developing just one system. Webstorm is an advanced easy to use IDE that has many benefits and unique functionalities, ensuring our team has the best technology at the top of their fingertips.</p>
          <h5>Webstorm benefits:</h5>
          <ul>
            <li>Code completion</li>
            <li>Error detection</li>
            <li>Easy navigation and shortcuts</li>
            <li>JavaScript refactoring</li>
          </ul>
          <div className='row'>
            <img src={require('../images/webstorm.png')} alt='webstorm-img' className='mx-auto d-blcok img-fluid p-4 mb-4'/>
          </div>

          {/* IntelliJ */}
          <h1>IntelliJ</h1>
          <p>Java is a widely used language known for its reliability and easy to scale structure. It is estimated that Java is used as the language of choice for over 7 billion devices worldwide. Monitor will design, build and test its backend technology using this language. IntelliJ is a powerful IDEA used by an estimated 70% of Java developers, which allows for quick spring initialization, data dependencies and git version control.</p>
          <h5>Benefits of IntelliJ:</h5>
          <ul>
            <li>Code completion</li>
            <li>Error detection</li>
            <li>Easy navigation and shortcuts</li>
            <li>Quick spring initialization</li>
            <li>Easy to install data dependencies</li>
            
          </ul>
          <div className='row'>
            <img src={require('../images/intellij-idea.png')} alt='intellij-img' className='mx-auto d-blcok img-fluid p-4'/>
          </div>

          {/* PyCharm */}
          <h1>PyCharm</h1>
          <p>Python is an easy to read high-level general-purpose language which is often viewed as one of the easiest to read. With the advent of IoT in recent years, Python has become a popular for IoT developers who want to quickly test and deploy systems. Given the large Python support community, Monitor will be using Python to implement its IoT simulation. PyCharm is an intelligent IDE which can assist with the tricky syntax associated with the language.</p>
          <h5>Benefits of PyCharm:</h5>
          <ul>
            <li>Code completion</li>
            <li>Error detection</li>
            <li>Easy navigation and shortcuts</li>
            <li>Cross technology development</li>
            <li>Scientific tools</li>
          </ul>
          <div className='row'>
            <img src={require('../images/pycharm.png')} alt='pycharm-img' className='mx-auto d-blcok img-fluid p-4'/>
          </div>

          {/* DataGrip */}
          <h1>DataGrip</h1>
          <p>MySQL is one of the most commonly used database languages, accounting for roughly 50% of database implementations. Given the complex relations that our product employs, MySQL has been made the management tool of choice. DataGrip is a new exciting database IDE tailored for SQL developers.</p>
          <h5>Benefits of DataGrip:</h5>
          <ul>
            <li>Query completion</li>
            <li>Error checking</li>
            <li>Efficient schema navigation</li>
            <li>Analysis and code improvement recommendations</li>
          </ul>
          <div className='row'>
            <img src={require('../images/datagrip.png')} alt='datagrip-img' className='mx-auto d-blcok img-fluid p-4'/>
          </div>

          {/* Raspberry Pi */}
          <h1>Raspberry Pi</h1>
          <p>Our IoT simulation portion of the project will be completed using RaspberryPi
            Allows us to simulate an embedded system with appropriate functionality in this case the operation of an elevator
            Provides the ability to trigger relays
            Provides the ability to detect switch presses
            Provides the ability to connect to the internet over TCP and send and receive data
            Easy to use and operate with large amounts of information available online
          </p>
          <div className='row'>
            <img src={require('../images/raspberrypi.png')} alt='raspberrypi-img' className='mx-auto d-blcok img-fluid p-4'/>
          </div>

          {/* Github */}
          <h1>Github</h1>
          <p>
            Will provide us with a version control system for this project.
            Will allow the group to collaborate and make changes to code remotely.
            Enable the development process to be managed in various stages, such as production, testing and development branches.
          </p>
          <p>
            Deployment Environments 
            The project will be deployed primarily as a mobile application that will be compatible with both Apple and Android phones and downloadable from the apple and play store. There will also be a web browser equivalent. This is possible with the React framework. 
            The backend server, IoT server, web server and database will be hosted using Amazon Web Services (AWS) 
          </p>
          <div className='row'>
            <img src={require('../images/github.png')} alt='github-img' className='mx-auto d-blcok img-fluid p-4'/>
          </div>
        </div>
      </div>
    );
  }
}