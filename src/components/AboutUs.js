import React, { Component } from 'react';

export class AboutUs extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
       <div className='documentation-card m-5 p-4 col-8'>
       <h3>About Us (Market Research)</h3>
        <p>
          The current use of technology in the construction and trade sector is being greatly underutilised. Time is lost trying to manage or access documentation that can aid in problem diagnosis or operational optimisation. Such documentation is often necessary, but unavailable due to mistrust or inconvenience.
        </p>
        <br/>
        <p>Work sites generate enormous amounts of documentation, which are printed and filled out by hand, resulting in communication delays and the consumption of excessive quantities of paper. This becomes a recurring problem as records (technical drawings, permits, etc) are often destroyed or damaged and have to be re-printed and distributed, causing significant financial and environmental cost.</p>
        <br/>
        <p>Additionally, existing technologies which monitor services generally don’t relay vital information to field staff. This information is often inadequately communicated to relevant staff, with multiple channels to pass through before reaching the desired field employee which leads to delays and inefficient deployment of staff.</p>
        <br/>
        <p>Such information can be imperative to minimising the workload of repair services, which often require the use of antiquated tools and old, damaged drawings for diagnosis. These outdated practices often mean that any data collected is not fully utilised to better improve business operations.</p>
        <br/>
        
        <h5>Underutilisation of technology in the construction and service industry</h5>
        <ul>
          <li>Mobile phones are readily available for most tradespeople on site but systems currently in place rely on paper-based systems for document dispersal   </li>
        </ul>

        <h5>Inefficient communication channels</h5>
        <ul>
          <li>Initial reports are often filtered through multiple parties before they reach the required field staff</li>
        </ul>

        <h5>Lack of IoT utilisation for distributed systems particularly in small companies</h5>
        <ul>
          <li>IoT is relatively new and has not yet been fully implemented for large scale distributed systems like elevators and air-conditioning</li>
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

        <h5>Inability to access required technical documentation for repairs</h5>
        <ul>
          <li>On site manuals are often lost or destroyed</li>
          <li>This is particularly relevant for older building</li>
          <li>Field staff may not know the product ID and are unable to locate a relevant manual for help</li>
        </ul>

        <h5>Lack of security in information sharing</h5>
        <ul>
          <li>Large companies want to keep proprietary information private, which often limits their ability to share information although it is often necessary for repair work</li>
        </ul>

        <h5>Lack of digital access to required documents</h5>
        <ul>
          <li>Manuals and technical drawings are often paper based, which makes them easier to damage and lose</li>
        </ul>

       </div>
      </div>
    );
  }
}