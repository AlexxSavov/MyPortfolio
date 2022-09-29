import React from 'react'; 
import ProjectCards from '../../components/Project'


import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section>
          <div className="project">
            <h1 className="title">REACT Portfolio - By:Alexandre Savov</h1>
            <hr></hr>
          </div>

          <Wrapper id="card-data">


            {portfolio.map((project) => (
              <ProjectCards 
              key={project.id}
               image={project.image} 
               name={project.name} 
               /> ))}

               </Wrapper>
             </section>
         
         );
       }
     
     export default Portfolio;