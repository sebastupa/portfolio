import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSquareInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import CV from "../assets/Tupa Sebastian - CV.pdf";
import "../components/style/HomeStyle.css";

const Home = () => {


  return (
    <div id='home' className='home-wrapper'>
      <div className='home-content'>
        <h5>Hello, I'm</h5>
        <h1>Țupa Sebastian</h1>
        <h3>Beginner Web Developer</h3>
        <div className='social-media'>
          <a className='githubIcon' href="https://github.com/sebastupa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='linkedinIcon'  href="https://www.linkedin.com/in/sebastian-%C8%9Bupa-137528276" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a className='facebookIcon' href="https://www.facebook.com/sebk.tupa/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a className='instagramIcon' href="https://www.instagram.com/_tupaa_s/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
          
        </div>
        <a href={CV} download>
            <button className="cv-button">CV</button>
          </a>
       
      </div>


    </div>
  );
};

export default Home;
