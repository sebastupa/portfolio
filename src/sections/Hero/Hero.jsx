import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/profile image.jpg";
import sun from "../../assets/sun-svgrepo-com.svg";
import moon from "../../assets/moon-stars-svgrepo-com.svg";
import instagramLight from "../../assets/instagram-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from  "../../assets/Tupa Sebastian - CV.pdf"
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;

    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id="hero">
      <div className={styles.colourMedeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Tupa Sebastian"
        />
        <img
          className={styles.ColorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Sebastian <br /> Țupa
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://github.com/sebastupa" target="_blank"></a>
          <img src={githubIcon} alt="Github Icon" />
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/sebastian-%C8%9Bupa-137528276"
            target="_blank"
          ></a>
          <img src={linkedinIcon} alt="Linkedin Icon" />
        </span>
        <span>
          <a href="https://github.com/sebastupa" target="_blank"></a>
          <img src={instagramIcon} alt="Instagram Icon" />
        </span>
        <p>
          I am a dynamic person, attentive to detail, with a remarkable ability
          to collaborate effectively in project teams. My professional
          experience and acquired skills recommend me to contribute successfully
          to various initiatives and projects, ensuring precise and
          results-oriented execution. Additionally, I am passionate about web
          development.
        </p>
        <a href={CV} download>
            <button className="hover" download>CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
