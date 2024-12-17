// src/components/Honeypot.js
import React, { useState } from 'react';
import './Honeypot.css'; // Create and adjust as needed

function Honeypot() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`honeypot-page ${isDarkMode ? 'dark' : 'light'}`}>


      <div className="honeypot-container">
        <h2>Honeypot Tool</h2>
        <p className="description">
          Our Honeypot tool simulates vulnerable network services to attract and analyze malicious traffic. 
          By deploying this service, you can study attacker behaviors, identify common exploit attempts, 
          and refine your network defenses based on real-world intrusion data.
        </p>

        <div className="video-placeholder">
          <video width="600" height="400" controls poster="/video-placeholder.jpg">
            <source src="/your-honeypot-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="more-info">
          Gathering continuous insights from the Honeypot environment allows you to proactively 
          address potential weaknesses, ensuring a more robust and resilient network security posture.
        </p>

        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Honeypot;
