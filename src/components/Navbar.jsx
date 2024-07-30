import React, { useState, useEffect } from 'react';
import './style/NavbarStyle.css';
import { useTheme } from '../common/ThemeContext';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';
import Logo from '../assets/st-1.svg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeButton, setActiveButton] = useState('home');

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 150);

    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top + window.scrollY <= scrollPosition && rect.bottom + window.scrollY >= scrollPosition) {
          setActiveButton(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tooltipText = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  return (
    <div className={`navbar ${navOpen ? 'show-nav' : ''} ${scrolling ? 'scrolled' : ''}`}>
      <div className="theme-switch">
        <Switch
          onChange={toggleTheme}
          checked={theme === 'dark'}
          checkedIcon={
            <div className="switch-icon-container">
              <FaMoon className="switch-icon-moon" />
            </div>
          }
          uncheckedIcon={
            <div className="switch-icon-container">
              <FaSun className="switch-icon-sun" />
            </div>
          }
          offColor="rgba(37, 63, 82, 0.5)"
          onColor="rgba(37, 63, 82, 0.5)"
          offHandleColor="#8E549D"
          onHandleColor="#B283BE"
          height={30}
          width={60}
          handleDiameter={17}
        />
        <div className="tooltip">{tooltipText}</div>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className={`hamburger ${navOpen ? 'active' : ''}`} onClick={handleNavToggle}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav>
        <button 
          className={activeButton === 'home' ? 'active' : ''} 
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button 
          className={activeButton === 'about' ? 'active' : ''} 
          onClick={() => scrollToSection('about')}
        >
          About
        </button>
        <button 
          className={activeButton === 'skills' ? 'active' : ''} 
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </button>
        <button 
          className={activeButton === 'portfolio' ? 'active' : ''} 
          onClick={() => scrollToSection('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={activeButton === 'contact' ? 'active' : ''} 
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
