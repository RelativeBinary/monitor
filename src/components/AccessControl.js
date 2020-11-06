import React, { Component } from 'react';

export class AccessControl extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center dark-blue'>
        <div className='documentation-card m-5 p-4 col-8 bg-light'>
          <h1>User management, security and access control</h1>
          <ul>
            <li>Easy user management</li>
            <ul>
              <li>Easily assign roles and grant access to application functionality by using toggle switches</li>
            </ul>
            <li>Allow your employees to view only what you want them to view</li>
            <li>Easy encryption and decryption of secure files </li>
            <ul>
              <li>All uploaded documents are encrypted automatically allowing you to feel confident that your private information is safe</li>
              <li>Grant and revoke access to view your documents at the click of a button</li>
            </ul>
            <li>Easy access management:</li>
            <ul>
              <li>Invite users to be part of your organisation or invite others outside of your organisation to collaborate on jobs</li>
              <li>Set expiration dates on sensitive data ensuring you never forget to remove you collaborators</li>
            </ul>
          </ul>
          <div className='col-lg-6 phone-image-container mx-auto'>
          <img src={require('../images/ui-access-control.png')} alt='iphone-img' />
        </div>
        </div>
      </div>
    );
  }
}