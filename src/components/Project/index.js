import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// My Card props

function ProjectCards(props) {
    return (
      <div className="card"> 

        <div className="img-container">

          <img alt={props.name} src={props.image}/>
        </div>

        <div className="content">
              <p className="project-title"
               id="card-title">{props.name}</p>

<p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;