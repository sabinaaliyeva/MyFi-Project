// src/components/AttackDetectorPage.js
import React, { useState, useEffect } from 'react';
import './AttackDetectorPage.css';

function AttackDetectorPage() {
  // Example log data (initial) and severity counts
  const [logs, setLogs] = useState([
    { time: '3:45 PM', message: 'IP 192.168.1.42 suspicious activity detected', severity: 'high' },
    { time: '3:46 PM', message: 'Increased latency on port 443', severity: 'medium' },
    { time: '3:47 PM', message: 'Potential brute force attempt from IP 203.0.113.5', severity: 'high' },
    { time: '3:48 PM', message: 'Port scan attempt detected from IP 10.0.0.5', severity: 'medium' },
    { time: '3:49 PM', message: 'Unusual DNS request pattern from IP 192.168.10.2', severity: 'weak' },
  ]);
  const [error, setError] = useState('');

  // Function to simulate fetching new logs
  const fetchLogs = () => {
    // Simulate new log data
    const newLog = {
      time: new Date().toLocaleTimeString(),
      message: `New suspicious activity detected at ${new Date().toLocaleTimeString()}`,
      severity: 'high',
    };

    setLogs((prevLogs) => [newLog, ...prevLogs]);
  };

  // Refresh logs manually
  const handleRefresh = () => {
    fetchLogs();
  };

  // Calculate severity counts
  const severityCounts = {
    weak: logs.filter(log => log.severity === 'weak').length,
    medium: logs.filter(log => log.severity === 'medium').length,
    high: logs.filter(log => log.severity === 'high').length,
  };

  // Total logs for normalization if needed
  const totalLogs = logs.length;
  const weakPercent = (severityCounts.weak / totalLogs) * 100 || 0;
  const mediumPercent = (severityCounts.medium / totalLogs) * 100 || 0;
  const highPercent = (severityCounts.high / totalLogs) * 100 || 0;

  // Automatic refresh every 3 minutes (180000 ms)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLogs();
    }, 180000); // 3 minutes in milliseconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="attack-detector-page">
      <h2>24/7 Attack Detector: Log Overview</h2>
      <p className="description">Below are live logs and their severity classification.</p>

      {/* Severity Classification Diagram */}
      <div className="severity-chart">
        <div className="severity-labels">
          <span>Weak: {severityCounts.weak}</span>
          <span>Medium: {severityCounts.medium}</span>
          <span>High: {severityCounts.high}</span>
        </div>
        <div className="severity-bar-container">
          <div
            className="severity-bar weak-bar"
            style={{ width: `${weakPercent}%` }}
            title={`Weak: ${severityCounts.weak}`}
          ></div>
          <div
            className="severity-bar medium-bar"
            style={{ width: `${mediumPercent}%` }}
            title={`Medium: ${severityCounts.medium}`}
          ></div>
          <div
            className="severity-bar high-bar"
            style={{ width: `${highPercent}%` }}
            title={`High: ${severityCounts.high}`}
          ></div>
        </div>
      </div>

      {/* Logs Section */}
      <div className="logs-section">
        <h3>Live Logs</h3>
        <div className="logs-container">
          {logs.map((log, index) => (
            <div className={`log-entry ${log.severity}`} key={index}>
              <span className="log-time">[{log.time}]</span> {log.message}
            </div>
          ))}
        </div>

        {/* Refresh Button */}
        <button onClick={handleRefresh} className="refresh-button">
          Refresh Logs
        </button>
      </div>
    </div>
  );
}

export default AttackDetectorPage;
