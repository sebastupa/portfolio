import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import CV from "../assets/Tupa Sebastian - CV.pdf";
import Hero from "../assets/UniversalUpscaler_52c0b86c-9ba3-4269-b2bf-3df2a55d6997.jpg";
import "../components/style/HomeStyle.css";

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className='home-content'>
        <h2>Hi, Myself</h2>
        <h1>Țupa Sebastian</h1>
        <h3>And I'm a beginner Web Developer</h3>
        <p>
          I am a dynamic person, attentive to detail, with a remarkable ability
          to collaborate effectively in project teams. My professional
          experience and acquired skills recommend me to contribute successfully
          to various initiatives and projects, ensuring precise and
          results-oriented execution. Additionally, I am passionate about web
          development.
        </p>
      </div>

      <div className='right-section'>
        <div className='home-img'>
          <img src={Hero} alt="hero image" />
        </div>
        <div className='social-media'>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/sebastian-%C8%9Bupa-137528276" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/_tupaa_s/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          <a href={CV} download>
            <button className="cv-button">CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
