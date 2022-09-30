import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="title">
      <h1 className="name">Alex Savov</h1>
      <h1 className="name">About</h1>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            className="mb-5 about-profile-image" 
            src={process.env.PUBLIC_URL+"/assets/images/Alex-Savov.jpg"}
            alt="Alexandre Savov"
            height={200}
            width={200}
           
          
          />
          

          <p>
           ------------------------------------------------------
          </p>
          <p>
          Hey there and welcome to my Profesional Portfolio!!
          </p>
          <p></p>
          <p>
          Within this Portfolio you will find some of the projects iv worked on throughout my term at the UofT full stack program.
          </p>
          <p>
         Its been an exciting journey for me to enter into an entirely new industry. Im always looking to learn knew topics and expand my knowlege as a full stack developer.
          </p>
          <p>
          When im not activley seeking new opprotunities in tech 
          im usually spending my time in nature with my dogs. 
          </p>
          <p>
            -----------------------------
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