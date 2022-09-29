import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Alex Savov</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
               Motivated Porfesional with experience in Full Stack Developement 

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/alex-savov-4113a8231//">
                    <img src="https://img.icons8.com/clouds/100/000000/linkedin.png"
                    alt="Alexandre Savov LinkedIn"/></a>

                </p>

                <p>
                CHECKOUT MY RESUME &rarr;  <a href= "https://github.com/AlexxSavov/MyPortfolio/raw/main/src/assets/Resume-Alexandre-Savov.pdf"
                 class="link">RESUME</a>

                 <br></br>
 
                 </p>
             </div>
         </div>
 
         <div class="justify-content-center mt-5">
             <div id="front-back">
                 <h2>Front End Experience</h2>
                 <p>React.js, HTML, CSS, IndexedD, Bootstrap, JavaScript, Angular.js, jQuery, 
                   
                    
                      
                         
                         </p>
             </div>
     
             <div id="front-back" class="mt-5">
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