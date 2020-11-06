import React, { Component } from 'react';

export class FutureGoals extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center dark-blue'>
       <div className='documentation-card m-5 p-4 col-8 bg-light'>
       <h1>Future Goals</h1>
        <ul>
          <li>Task management</li>
          <ul>
            <li>Create and distribute tasks to your workforce</li>
            <li>Collect and store data about completed work for analysis</li>
            <li>Save time by allowing staff company to complete paperwork digitally</li>
            <li>Automatically fill timesheets for staff</li>
          </ul>
          <li>Digital Licensing</li>
          <ul>
            <li>Keep all your licences in one place so you never have to carry them again</li>
            <li>Send your licence details at the click of a button</li>
            <li>Get notifications when your licences are about to expire</li>
          </ul>
          <li>Machine learning and predictive analysis</li>
          <ul>
            <li>Use the data being collected to predict when breakdowns will occur</li>
            <li>Find correlations between injuries and procedure</li>
            <li>Find breakdown hotspots so you can better distribute your workforce</li>
          </ul>
          <li>Online form creation</li>
          <ul>
            <li>Digitally create commissioning forms so they can easily be completed on site</li>
            <li>Digitally create and sign safety paperwork saving you time and money</li>
          </ul>
        </ul>
       </div>
      </div>
    );
  }
}
