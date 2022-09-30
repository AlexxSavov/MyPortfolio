import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="title">
      <h1 className="name">about: Alexandre Savov</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            className="mb-5 about-profile-image" 
            src="assets/images/Alex-Savov.jpg"
            alt="Alexandre Savov"
            height="200"
            width="200"
          />
          <p>
            Insert some info about myself here
          </p>
          <p>
          Insert some info about myself here
          </p>
          <p>
          Insert some info about myself here
          </p>
          <p>
          Insert some info about myself here
          </p>
          <p>
          Insert some info about myself here
          </p>
          <p>
            Take a Closer Look &nbsp;
            <Link to='/resume'>
              RESUME
            </Link>
          </p>
        </div>  
    </div>
    </section> 
)}
  
export default About;