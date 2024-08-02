import React, { useState, useEffect } from 'react';
import './style/NavbarStyle.css';
import { useTheme } from '../common/ThemeContext';
import Switch from 'react-switch';
import { FaSun, FaMoon } from 'react-icons/fa';
import AdminLoginModal from './AdminLoginModal';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeButton, setActiveButton] = useState('home');
  const [pressTimer, setPressTimer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState('#000'); // Culoarea implicită a SVG-ului

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    setScrolling(window.scrollY > 150);

    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
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

  const handleMouseDown = () => {
    setColor('#0000FF'); // Culoarea la mouse down
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 3000);
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    setColor('#FF0000'); // Culoarea la mouse up
    clearTimeout(pressTimer);
  };

  const handleMouseLeave = () => {
    setColor('#000'); // Culoarea la mouse leave
    clearTimeout(pressTimer);
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
        <svg
          height="2500"
          viewBox="62 143 452 313"
          width="2500"
          xmlns="http://www.w3.org/2000/svg"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <path
            d="m143 144.5c-6.3 1.4-14.6 4.2-17.5 5.8-1.1.7-4 1.9-6.5 2.7-2.5.9-6.7 2.9-9.4 4.5-5.7 3.5-20.6 15.4-20.6 16.5 0 .4-1.8 2.8-4 5.3-8 9-11 14.5-16.5 29.7-3.8 10.4-6.5 23.9-6.5 32.1.1 15.3 8.5 42.6 15.9 51.2 1.5 1.8 4.1 5.2 5.8 7.7 9.7 14.1 29.3 27.3 50.4 34l9.6 3h39.9l39.9.1 6 3.3c7.3 4 10.5 9.2 10.5 17.2 0 6.5-1 9.2-5.1 13.8-6.5 7.5-2.3 7-72.4 7.6l-63 .5-.5 36.5c-.3 20.1-.1 37.3.3 38.3.7 1.6 5 1.7 68.5 1.7h67.8l11.4-3.9c15.7-5.3 20-7 23.5-9.6 1.7-1.2 5-3.4 7.5-4.8 7.8-4.6 23.7-21.8 27.6-30 2.3-5 3-6.1 6.5-11.7 1.5-2.3 2.4-5.1 6.3-19.1 2-7.1 2.1-25.9.1-35.4-2.6-12.9-8.4-28.5-10.6-28.5-.5 0-1.8-1.9-2.8-4.3-1-2.3-3.8-6.6-6.2-9.6-2.4-2.9-4.8-6.1-5.4-7-4.1-6.8-28-21.7-40-25-4.2-1.2-9-2.8-10.5-3.6-1.6-.8-4.6-1.5-6.7-1.5s-6.3-.7-9.3-1.5c-4.3-1.2-12.5-1.5-38.2-1.5-31.3 0-32.9-.1-36.8-2.1-4.8-2.5-9-7.2-9.1-10.2-.5-13.2 2.4-20.4 10-24.4l4.4-2.3h196.7l1.1 2.6c.6 1.7.9 42.9.9 117-.1 62.9.2 114.9.5 115.4.4.6 15.2 1 40.5 1h39.8l.6-2.5c.4-1.4.6-53.6.6-116.1-.1-62.5.2-113.9.5-114.3.4-.3 16.9-.7 36.7-.8 25.2-.2 36.5-.6 37.4-1.4 1.1-.9 1.4-8 1.4-38 0-32.1-.2-37-1.6-38.3-1.4-1.4-19.3-1.6-182.7-1.5-142.2.1-182.4.4-186.7 1.4z"
          />
        </svg>
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
          className={activeButton === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection('projects')}
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
      <AdminLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Navbar;
