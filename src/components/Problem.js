import React, { Component } from 'react';

export class Problem extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center '  style={{minHeight: "200px", backgroundColor: "#0099ff"}}>
      <div className='documentation-card m-5 p-4 col-8 bg-light'>
        <h1>What Monitor Hopes to Address</h1>
        <p>The current use of technology in the lift industry is being greatly underutilised.</p>
        <p>Additionally, existing technologies which monitor services generally don’t relay vital information to field staff. This information is often inadequately communicated to relevant staff, with multiple channels to pass through before reaching the desired field employee which leads to delays and inefficient deployment of staff.</p>
        <br/>
          
        <h5>
          Underutilisation of technology in the construction and service industry 
        </h5>
        <ul>
          <li>Find out what is causing your breakdowns</li>
          <li>Mobile phones are readily available for most tradespeople on site but systems currently in place rely on paper-based systems for document dispersal</li>
        </ul>
        
        <h5>Inefficient communication channels</h5>
        <ul>
          <li>Initial reports are often filtered through multiple parties before they reach the required field staff</li>
        </ul>
        
        <h5>Lack of IoT ultilisation for distributed systems particularly in small companies.</h5>
        <ul>
          <li>IoT is relatively new and has not yet been fully implemented for large scale distributed systems like elevators</li>
          <li>Companies that do implement such technology often rely on a centralised monitoring system and use staff members to relay information to relevant staff</li>
          <ul>
            <li>Systems usually monitor state, without providing greater information about the cause of faults and breakdowns</li>
          </ul>
        </ul>

        <h5>Inefficiencies in staff deployment to breakdowns and repairs</h5>
        <ul>
          <li>Current systems rely heavily on people to receive calls and distribute staff.</li>
          <li>Calls are taken by a call centre, who determine who is available and deploy them</li>
          <ul>
            <li>This often leads to long delays and does not always take into account available resources</li>
          </ul>
        </ul>

        <h5>Lack of security in information sharing</h5>
        <ul>
          <li>Large companies want to keep proprietary information private, which often limits their ability to share information although it is often necessary for repair work</li>
        </ul>
      </div>
     </div>
    );
  }
}