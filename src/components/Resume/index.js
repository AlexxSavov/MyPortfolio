import React from 'react'; 

function Resume() {
  return(
    <section className="mb-5">
      <h1 className="resume">Alex Savov</h1>
      <h1 className="resume">Resume</h1>
      <hr></hr>
      <div className="row justify-content-center" id="resume">
        <div className="mt-5 pl-5 pr-5">
          Motivated Porfesional with experience in Full Stack Developement 

          <p className="mt-5">
            <a href="https://www.linkedin.com/in/alex-savov-4113a8231//">
            <img src="https://img.icons8.com/clouds/100/000000/linkedin.png"
            alt="Alexandre Savov LinkedIn"/></a>
          </p>

          <p>
            CHECKOUT MY RESUME &rarr;
            <a
              href="assets/Resume-Alexandre-Savov.pdf"
              className="link"
              download
            >
              RESUME
            </a>
            <br></br>
          </p>
        </div>
      </div>
    
      <div className="justify-content-center mt-5">
        <div id="front-back">
          <h2>Front End Experience</h2>
          <p>
            React.js, HTML, CSS, IndexedD, Bootstrap, JavaScript, Angular.js, jQuery, 
          </p>
        </div>
        
        <div id="front-back" className="mt-5">
          <h2>Back End Experience</h2>
          <p>
          API's:third-party, RESTful, server-side, Express.js, SQL, mySQL, Sequelize, NoSQL Node.js,,MongoDB, Mongoose,  Templating:Handlebars
          </p>
        </div>
      </div>
  </section>
  );
}
 
 export default Resume;