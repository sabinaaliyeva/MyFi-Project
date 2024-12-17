import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dashboard-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2 className="dashboard-title">Dashboard</h2>

      {/* Dark Mode Toggle Button */}
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className="dashboard-options">
        {[{
            title: 'Wireless Misconfiguration Scanner',
            description: 'Initiate and monitor network scans around the clock.',
            path: '/network-scanner',
            icon: 'fa fa-network-wired',
          },
          {
            title: '7/24 Wireless Attack Detector',
            description: 'View and analyze network logs efficiently.',
            path: '/network-detector',
            icon: 'fa fa-search',
          },
          {
            title: 'Wireless Honeypot Creator',
            description: 'Create a honeypot for securing your network.',
            path: '/honeypotpage',
            icon: 'fa fa-shield-alt',
          }
        ].map((option, index) => (
          <Link to={option.path} className="dashboard-option" key={index}>
            <div className="option-icon">
              <i className={option.icon}></i>
            </div>
            <div className="option-content">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
