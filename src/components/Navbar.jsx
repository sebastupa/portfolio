import React, { useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from '../common/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './style/NavbarStyle.css';
import Logo from '../assets/st-1.svg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const tooltipText = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';


  return (
    <div className={`navbar ${navOpen ? 'show-nav' : ''}`}>
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
          height={30} /* Ajustează înălțimea switch-ului */
          width={60} /* Ajustează lățimea switch-ului */
          handleDiameter={17}  // Ajustează diametrul mânerului
        
          
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
        <a href="home" className="active">Home</a>
        <a href="about">About</a>
        <a href="services">Services</a>
        <a href="portfolio">Portfolio</a>
        <a href="contact">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
