import React, { Component } from 'react';

export class DesignMethodology extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <div className='documentation-card m-5 p-4 col-8'>
          <h1>How Do We Design?</h1>
          <p>Scrum will allow Monitor to develop and test multiple components simultaneously rather than sequentially. Our team of developers will be able to work on the fly which will result in quicker development times and reduced costs. Scrum as a methodology accounts for change and as a result, the life of the project is flexible. This increased flexibility allows for greater project complexity and adaptability, meaning that the scope can be changed as needed.</p>
          <p>
            Development phases will be carried out in order of importance, meaning we will be able to release “completed” chunks of our system to the market. This will allow our client to begin giving feedback before the project is completed, ensuring customer satisfaction and reducing the need for refactoring at the end of the project.
          </p>
          <p>
            This methodology has a focus on the development team, with all members working towards a collective goal for each sprint. The goal of these sprints is to produce useable components and add value to our business. Each member of the team may have a designated role, but the whole team is responsible for the overall success of the project, meaning help will never be too far away.
          </p>
          <p>
            Our Scrum Master will ensure that the team is not exposed to outside pressure from our clients, meaning that our team members will have a greater capacity to focus on work, which will hopefully increase morale and motivation. Implementing pair programming will work on the logic that using two heads is better than one, which will increase the knowledge base and hopefully speed up the learning curve associated with the new technologies.
          </p>
        </div>
      </div>
    );
  }
}