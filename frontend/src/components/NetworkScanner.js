// src/components/NetworkScanner.js
import React, { useState } from 'react';
import './NetworkScanner.css';

function NetworkScanner() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`network-scanner-page ${isDarkMode ? 'dark' : 'light'}`}>

      <div className="scanner-container">
        <h2>7/24 Network Scanner</h2>
        <p className="description">
          Our  Network Scanner tool scans your network, identifying active hosts, open ports,
          and potential vulnerabilities around the clock. Stay informed and secure with real-time insights.
        </p>

        <div className="video-placeholder">
          <video width="600" height="400" controls poster="/video-placeholder.jpg">
            <source src="/your-scanner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="more-info">
          With continuous scanning, you can proactively address potential issues, ensuring your network remains
          stable and secure.
        </p>

        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default NetworkScanner;
