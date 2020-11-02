import React, { Component } from 'react';

export class DocumentManagement extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
       <div className='documentation-card m-5 p-4 col-8'>
         <h1>Document Management</h1>
         <h4>Attach your technical documents to jobs, equipment or services ensuring that the necessary information is available at the click of the button. Grant and revoke permission to view these documents, ensuring that your sensitive data is always safe. </h4>
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
       </div>
      </div>
    );
  }
}
