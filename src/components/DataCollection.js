import React, { Component } from 'react';

export class DataCollection extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center dark-blue'>
        <div className='documentation-card m-5 p-4 col-8 bg-light'>
          <h1>Data Collection</h1>
          <h4>Collect and store the data that your IoT devices transmit, ensuring   that noting is ever overlooked again</h4>
          <ul>
            <li>Find out what is causing your breakdowns</li>
            <li>Identify problem jobs and equipment</li>
            <ul>
              <li>Generate reports for easy viewing and analysis.</li>
            </ul>
          </ul>
          <div className='col-lg-6 phone-image-container mx-auto'>
            <img src={require('../images/ui-data-col.png')} alt='iphone-img' />
          </div>
       </div>
      </div>
    );
  }
}
