import React from "react";
import { Link } from "react-router-dom";
// import Dashboard from "../Dashboard/Dashboard";
import './aboutHome.css';
// import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";




const AboutEvents = () => {
    const navigate = useNavigate();

    const getEvnts = () =>{
        navigate('/home')
    }
  return (
    <>
      <main class="main">
        {/* <!-- Header --> */}

        {/* <!-- Landing --> */}
        <section class="landing">
          <div class="landing-text">
            <h1>Events Planner</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <a href="#url-shorten-form" class="btn btn-lg">
                <Link to='/events'>
              Get Started
                </Link>
            </a>
          </div>
          <div class="landing-image">
            <img
              src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg"
              alt="Working Illustration"
            />
          </div>
        </section>
        {/* <!-- Features --> */}
        <section class="features" id="features">
          <div class="container">
            {/* <!-- Short URL Feature --> */}
            <div class="url-shorten-feature">
              <form class="url-shorten-form" id="url-shorten-form">
                <div>
                  <input
                    type="text"
                    class="url-input"
                    placeholder="Shorten a link here..."
                    autocomplete="off"
                  />
                  <span class="alert"></span>
                </div>
                <button type="submit" class="btn btn-lg btn-plus-icon" onClick={getEvnts}>
                  Create Events
                </button>
              </form>
              <div class="url-shorten-results"></div>
            </div>

    {/* Home page dashboad  */}
    {/* <Dashboard/> */}



            {/* <!-- Advanced Features --> */}
            <div class="more-features">
              <div class="section-header">
                <h2>Requirement Events Planner</h2>
                <p>
                  this technology is used React Js , Redux ToolKIt , Css3 & Bootstrap Firebase 
                </p>
              </div>
              <div class="more-features-content">
                <div class="feature">
                  <div class="feature-illustration">
                    <img
                      src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg"
                      alt="Feature Illustration Icon"
                    />
                  </div>
                  <div class="feature-details">
                    <h3>Login SignUp Firbase Auth</h3>
                    <p>
                      The log-in form should require users to provide their
                      email and password and could optionally include a
                      "Remember me" checkbox for convenience.
                    </p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-illustration">
                    <img
                      src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg"
                      alt="Feature Illustration Icon"
                    />
                  </div>
                  <div class="feature-details">
                    <h3>Create Events & Join Events</h3>
                    <p>
                      Users can create a new event by providing a title, date
                      and time, location, description, and a list of invitees
                      (optional).
                    </p>
                  </div>
                </div>
                <div class="feature">
                  <div class="feature-illustration">
                    <img
                      src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg"
                      alt="Feature Illustration Icon"
                    />
                  </div>
                  <div class="feature-details">
                    <h3>Redux Toolkit</h3>
                    <p>
                      Redux toolkit using the sign in and sign up page , redux
                      tool kit use create slice and create store. front end data
                      send to redux tookkit and then backend to firbase .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Pricing --> */}
        <section class="pricing" id="pricing">
          <div class="container">
            <div class="section-header">
              <h2 style={{color:"black"}}>Events Planner today</h2>
              <a href="#" class="btn btn-lg">
                Get Started
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer class="footer" id="resources">
          <div class="container">
            {/* <!-- Website Logo --> */}
            <div class="logo">
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/logo.svg"
                  alt=""
                />
              </a>
            </div>
            {/* <!-- Quick Links --> */}
            <div class="quick-links">
              <div class="links-group">
                <span>Features</span>
                <div>
                  <a href="#">Login SignUp</a>
                  <a href="#">Create Events</a>
                  <a href="#">Join Events</a>
                </div>
              </div>
              <div class="links-group">
                <span>Resources</span>
                <div>
                  <a href="#">MERN STACK</a>
                  <a href="#">And Full Stack</a>
                  <a href="#">Developers</a>
                </div>
              </div>
              <div class="links-group">
                <span>Company</span>
                <div>
                  <a href="#">About</a>
                  <a href="#">Our Teams</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            {/* <!-- Social Media --> */}
            <div class="social-media">
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-facebook.svg"
                  alt="Facebook Logo"
                />
              </a>
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-twitter.svg"
                  alt="Twitter Logo"
                />
              </a>
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-pinterest.svg"
                  alt="Pinterest Logo"
                />
              </a>
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-instagram.svg"
                  alt="Instagram Logo"
                />
              </a>
            </div>
          </div>
          {/* <!-- Made By --> */}
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              class="outer-link"
              target="_blank"
            >
              Frontend End And Backend
            </a>
            . Coded by <span class="outer-link">Rana Saqib Ali</span>.
            <ul class="social-media">
              <li>
                <a
                  href="https://www.codepen.io/FedLover"
                  title="go To My Codepen Account"
                >
                  <i class="fa-brands fa-codepen icon"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.frontendmentor.io/profile/MohamedAridah"
                  title="go To My Frontend Mentor Account"
                >
                  <img
                    src="https://mohamedaridah.github.io/hosted-assets/FEM.png"
                    class="image"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
};

export default AboutEvents;
