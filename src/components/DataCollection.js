import React, { Component } from 'react';

export class DataCollection extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
      <div className='documentation-card m-5 p-4 col-8'>
        <h1>Data Collection</h1>
        <h4>Collect and store the data that your IoT devices transmit, ensuring that noting is ever overlooked again</h4>
        <ul>
          <li>Find out what is causing your breakdowns</li>
          <li>Identify problem jobs and equipment</li>
          <ul>
            <li>Generate reports for easy viewing and analysis.</li>
          </ul>
        </ul>
      </div>
     </div>
    );
  }
}
