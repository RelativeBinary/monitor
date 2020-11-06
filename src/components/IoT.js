import React, { Component } from 'react';

export class IoT extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center dark-blue'>
       <div className='documentation-card m-5 p-4 col-8 bg-light'>
         <h1>IoT Monitoring & Control</h1>
         <p>Give your staff the ability to view the status of the equipment they service or take it away. Easily add and remove IoT devices to our system. With easy to use access control add and remove your employees’ rights to view this information.</p>
         <h5>Benefits of out IoT Management:</h5>
         <ul>
           <li>Improved IoT security to give you peace of mind that your data is safe</li>
           <li>Fault notification of our IoT Management:</li>
           <ul>
             <li>Fault notifications will be sent to your staff directly rather than relying on office resources to relay information</li>
             <li>Your staff will be distributed based on their location and proximity to the breakdown</li>
             <li>Log breakdowns so you know what work you have upcoming</li>
           </ul>
         </ul>
          <div className="row">
            <div className='col-lg-6 phone-image-container mx-auto'>
            <img src={require('../images/ui-iot-monitoring2.png')} alt='iphone-img' />
          </div>
          <div className='col-lg-6 phone-image-container mx-auto'>
            <img src={require('../images/ui-iot-monitoring.png')} alt='iphone-img' />
          </div>
          </div>
         
       </div>
      </div>
    );
  }
}
