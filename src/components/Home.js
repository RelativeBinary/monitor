import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export class Home extends Component {
  render() {
    return (
      <div>
        {/*Section*/}
        <div className='section blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>The on-site digital workplace</h1>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
              </div>

              <div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quaerat dolor deleniti, laboriosam labore quam suscipit vitae
            deserunt impedit cupiditate ipsum minima maxime hic eveniet sint
            porro nulla tempore odio soluta officia! Totam laudantium sequi
            adipisci at, tenetur maiores iure.
          </div>
        </Container>
        {/*Section*/}
        <div className='section washed-blue-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>The on-site digital workplace</h1>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
              </div>

              <div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
              </div>
            </div>
          </Container>
        </div>
        {/*Section*/}
        <div className='section washed-blue-purple-gradient text-light'>
          <Container>
            <div className='row'>
              <div className='col-lg-6'>
                <h1>The on-site digital workplace</h1>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                  facere officiis?
                  <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
                </h4>
              </div>

              <div className='col-lg-6 phone-image-container'>
                <img src={require('../images/iphone-x.png')} alt='iphone-img' />
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quaerat dolor deleniti, laboriosam labore quam suscipit vitae
            deserunt impedit cupiditate ipsum minima maxime hic eveniet sint
            porro nulla tempore odio soluta officia! Totam laudantium sequi
            adipisci at, tenetur maiores iure.
          </div>
        </Container>
        {/*Cards*/}
        <div className='section washed-red-yellow-gradient text-light'>
          <div className='grid-2-parent'>
            <div className='grid-2-child-1'>
              <h1>Why do enterprises choose Monitor?</h1>
              <h4>
                To simplify and optimize the communication and management of
                their hourly workforces with modern technology integrated with
                their existing systems through a single employee application
              </h4>
            </div>
            <div className='grid-2-child-2 text-dark bg-light card-style'>
              <h4>Lorem, ipsum.</h4>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium, deleniti at sit reprehenderit, animi magnam
                doloremque consequatur repellat iure blanditiis maxime
                reiciendis eveniet eum aspernatur. Quos voluptatum beatae quod
                quis.
              </div>
            </div>
            <div className='grid-2-child-3 text-dark bg-light card-style'>
              <h4>Lorem, ipsum dolor.</h4>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis vel dolorem magni, cupiditate est dolores.
              </div>
            </div>
            <div className='grid-2-child-4 text-dark bg-light card-style'>
              <h4>Lorem ipsum dolor sit.</h4>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda, unde quas. Dolorum cum nemo, tempore dignissimos,
                voluptates soluta ipsam, ex numquam laborum dolores saepe.
                Dignissimos iure rem delectus est sunt?
              </div>
            </div>
            <div className='grid-2-child-5 text-dark bg-light card-style'>
              <h4>Lorem, ipsum dolor.</h4>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                libero tempore alias!
              </div>
            </div>
            <div className='grid-2-child-6 text-dark bg-light card-style'>
              <h4>Lorem, ipsum.</h4>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                vero praesentium, cum reiciendis dolorem nisi.
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
                  <h1>Manik Bagga</h1>
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
                    <p>test</p>
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
                      <li></li>
                      <li></li>
                    </ul>
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
            
            
            
            <div class='p-4 mt-5 wrap'>
              <div class='d-flex flex-row'>
                <div class='pic-wrap'>
                  <img
                    src={require('../images/wut.png')}
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
                    <p>
                      <ul>
                        <li>Java & Spring Boot</li>
                        <li>Javascript & React Native/ReactJS</li>
                        <li>C++</li>
                        <li>AWS EC2 server hosting</li>
                        <li>Raspberry Pi</li>
                        <li>Command line</li>
                        <li>CompTIA Security+ SY0-501 Certification</li>
                        <li></li>
                        <li></li>
                      </ul>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
