import React from "react";
import "./style/AboutStyle.css";
import HeroImg from "../assets/UniversalUpscaler_52c0b86c-9ba3-4269-b2bf-3df2a55d6997.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div id="about" className="about-wrapper">
        <div className="about-me">
          <h1>About Me</h1>
        </div>
        <div className="about-section">
          <div className="about-image">
            <img src={HeroImg} alt="Hero" className="hero-img" />
          </div>
          <div className="about-content">
            <div className="about-card-section">
              <div className="about-card">
                <h2>
                  <FontAwesomeIcon icon={faGraduationCap} /> Education
                </h2>
                <div className="about-card-item">
                  <h3>BSc in Computer Science</h3>
                  <p>2020-2024</p>
                </div>
                <div className="about-card-item">
                  <h3>MSc in Computer Science and Engineering</h3>
                  <p>in progress</p>
                </div>
              </div>
              <div className="about-card">
                <h2>
                  <FontAwesomeIcon icon={faBriefcase} /> Experience
                </h2>
                <div className="about-card-item">
                  <h3>Web Development</h3>
                  <p>0-1 years</p>
                </div>
              </div>
            </div>
            <div className="about-description">
            <p>
              I am a student at the Faculty of Electrical Engineering and
              Computer Science. I am a dynamic person, attentive to details,
              with a remarkable ability to collaborate effectively in project
              teams. I am always open to learning new things, eager to improve
              my knowledge and skills. In my free time, I am passionate about
              football and F1, and I enjoy nature walks as a preferred
              way to relax.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
