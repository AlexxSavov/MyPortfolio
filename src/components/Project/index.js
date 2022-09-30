import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// My Card props

function ProjectCards({name, image, topics, github, deploy}) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={image} />
      </div>
      <div className="content">
        <p className="project-title"
          id="card-title">{name}</p>
        <p id="topics">
          ({topics})
        </p>
        <div>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </div>
        <div>
          <a
            href={deploy}
            target="_blank"
            rel="noreferrer"
          >
            App link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;