import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
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
      <Navigation />
      {/*Section*/}
      <div className='section blue-gradient text-light'>
        <Container>
          <div className='grid-1-parent'>
            <div className='grid-1-child-1'>
              <h1>The on-site digital workplace</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                facere officiis?
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          quaerat dolor deleniti, laboriosam labore quam suscipit vitae deserunt
          impedit cupiditate ipsum minima maxime hic eveniet sint porro nulla
          tempore odio soluta officia! Totam laudantium sequi adipisci at,
          tenetur maiores iure.
        </div>
      </Container>
      {/*Section*/}
      <div className='section washed-blue-gradient text-light'>
        <Container>
          <div className='grid-1-parent'>
            <div className='grid-1-child-1'>
              <h1>The on-site digital workplace</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                facere officiis?
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
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
              <h1>The on-site digital workplace</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                sapiente, beatae at voluptas eaque dicta delectus fugiat aut
                facere officiis?
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing.</h4>
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          quaerat dolor deleniti, laboriosam labore quam suscipit vitae deserunt
          impedit cupiditate ipsum minima maxime hic eveniet sint porro nulla
          tempore odio soluta officia! Totam laudantium sequi adipisci at,
          tenetur maiores iure.
        </div>
      </Container>
      {/*Cards*/}
      <div className='section washed-red-yellow-gradient text-light'>
        <div className='grid-2-parent'>
          <div className='grid-2-child-1'>
            <h1>Why do enterprises choose Monitor?</h1>
            <h4>
              To simplify and optimize the communication and management of their
              hourly workforces with modern technology integrated with their
              existing systems through a single employee application
            </h4>
          </div>
          <div className='grid-2-child-2 text-dark bg-light card-style'>
            <h4>Lorem, ipsum.</h4>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium, deleniti at sit reprehenderit, animi magnam doloremque
              consequatur repellat iure blanditiis maxime reiciendis eveniet eum
              aspernatur. Quos voluptatum beatae quod quis.
            </div>
          </div>
          <div className='grid-2-child-3 text-dark bg-light card-style'>
            <h4>Lorem, ipsum dolor.</h4>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vel dolorem magni, cupiditate est dolores.
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
              <div class='pic-wrap'>
                <img src={require('./images/wut.png')} alt='pic' class='pic' />
              </div>
              <div class='d-flex flex-column pl-4'>
                <h1>John Smith</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos totam quas temporibus! Nesciunt fugiat recusandae
                  deleniti qui velit. Perspiciatis sunt debitis in numquam eos
                  ipsum corrupti? Sint beatae minima dolore.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </body>
  );
}

export default App;
