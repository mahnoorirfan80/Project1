import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle, faBars, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Importing user, menu, and globe icons
import 'bootstrap/dist/css/bootstrap.min.css';  


function Navbar() {
  const [activePage, setActivePage] = useState('stays');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <header className="header">
      <div id="logoContainer">
        <FontAwesomeIcon icon={faAirbnb} className="logoIcon" size="3x" />
        <span className="logoName"> airbnb</span>
      </div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a 
          href="#stays" 
          className={activePage === 'stays' ? 'active' : ''} 
          onClick={() => handlePageChange('stays')}
        >
          Stays
        </a>
        <a 
          href="#experiences" 
          className={activePage === 'experiences' ? 'active' : ''} 
          onClick={() => handlePageChange('experiences')}
        >
          Experiences
        </a>
      </nav>

      <div className="right-side">
        <span className="username">Airbnb your home</span>

        {/* Add the globe icon here */}
        <FontAwesomeIcon icon={faGlobe} className="globeIcon" size="lg" />

        {/* Wrapper for the user and menu icons */}
        <div className="user-menu-wrapper">
          <FontAwesomeIcon icon={faBars} className="menuIcon" size="lg" />
          <FontAwesomeIcon icon={faUserCircle} className="userIcon" size="lg" />
        </div>
      </div>

      <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>
    </header>
  );
}

export default Navbar;
