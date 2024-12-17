// src/components/AttackDetector.js
import React, { useState } from 'react';
import './AttackDetector.css';

function AttackDetector() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`attack-detector-page ${isDarkMode ? 'dark' : 'light'}`}>


      <div className="attack-detector-container">
        <h2>24/7 Attack Detector</h2>
        <p className="description">
          Our 24/7 Attack Detector tool monitors your network in real-time, detecting suspicious activities, potential intrusions,
          and performance anomalies. Stay a step ahead of attackers with continuous analysis and early warnings.
        </p>

        <div className="video-placeholder">
          <video width="600" height="400" controls poster="/video-placeholder.jpg">
            <source src="/your-detector-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="more-info">
          This tool provides continuous insight into network anomalies, letting you identify issues before they escalate.
        </p>

        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default AttackDetector;
