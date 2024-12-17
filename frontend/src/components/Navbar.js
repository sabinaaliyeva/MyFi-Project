// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeIcon from './images/home-icon.png';      // Replace with your home icon image path
import menuIcon from './images/menu-icon.png';      // Replace with your menu (hamburger) icon image path

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [dropdown, setDropdown] = useState(false);

  const navbarRef = useRef(null);

  const toggleDropdown = () => setDropdown(!dropdown);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <div className="navbar" ref={navbarRef}>
      <div className="navbar-content">
        <Link to="/" className="navbar-home-link" aria-label="Home">
          <img src={homeIcon} alt="Home Icon" className="navbar-home-icon" />
        </Link>
        <button 
          className="menu-btn" 
          onClick={toggleDropdown} 
          aria-label="Open user menu"
        >
          <img src={menuIcon} alt="Menu Icon" className="navbar-menu-icon" />
        </button>
        {dropdown && (
          <div className="dropdown-menu">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" onClick={() => setDropdown(false)}>Dashboard</Link>
                <Link to="/settings" onClick={() => setDropdown(false)}>Settings</Link>
                <Link to="/account" onClick={() => setDropdown(false)}>Account</Link>
                <button onClick={() => { handleLogout(); setDropdown(false); }} className="logout-button">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setDropdown(false)}>Login</Link>
                <Link to="/signup" onClick={() => setDropdown(false)}>Signup</Link>
                <Link to="/networkscanner" onClick={() => setDropdown(false)}>Scanner</Link>
                <Link to="/networkdetector" onClick={() => setDropdown(false)}>7/24 Detector</Link>
                <Link to="/honeypot" onClick={() => setDropdown(false)}>Honeypot</Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
