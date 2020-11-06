import React, { Component } from 'react';

export class DocumentManagement extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center dark-blue'>
       <div className='documentation-card m-5 p-4 col-8 bg-light'>
         <h1>Document Management</h1>
         <p>Attach your technical documents to jobs, equipment or services ensuring that the necessary information is available at the click of the button. Grant and revoke permission to view these documents, ensuring that your sensitive data is always safe. </p>
         <ul>
           <li>Upload</li>
            <ul>
              <li>Upload your documents to a central and easy to retrieve database</li>
            </ul>
            <li>Security</li>
          <ul>
            <li>Grant and revoke access to sensitive documents with the click of a button</li>
          </ul>
          <li>Digitised manuals, product information guides and technical drawings</li>
          <ul>
            <li>Never use a damaged drawing again</li>
          </ul>
          <li>Document search capabilities</li>
          <ul>
            <li>Allow your employees to search using QR codes, saving time and money</li>
            <li>Allows your staff to quickly retrieve information at the click of a button</li>
            <li>Will speed up maintenance and repair times</li>
          </ul>
        </ul>
        <div className='col-lg-6 phone-image-container mx-auto'>
          <img src={require('../images/ui-doc-man.png')} alt='iphone-img' />
        </div>
      </div>
    </div>
    );
  }
}
