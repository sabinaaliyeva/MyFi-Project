// src/components/NetworkScannerPage.js
import React, { useState } from 'react';
import './NetworkScannerPage.css';

function NetworkScannerPage() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanCompleted, setScanCompleted] = useState(false);
  const [results, setResults] = useState(null);

  const startScan = () => {
    setIsScanning(true);
    setScanCompleted(false);
    setResults(null);

    // Simulate a network scan taking 3 seconds
    setTimeout(() => {
      // Mock results
      const mockResults = {
        totalHostsScanned: 256,
        activeHosts: 42,
        openPorts: 120,
        vulnerabilitiesFound: 3,
      };
      setResults(mockResults);
      setIsScanning(false);
      setScanCompleted(true);
    }, 3000);
  };

  return (
    <div className="network-scanner-page">
      <h2>Network Scanner</h2>
      {!isScanning && !scanCompleted && (
        <div className="scan-prompt">
          <p>Click the button below to start the network scan.</p>
          <button onClick={startScan}>Start Scan</button>
        </div>
      )}

      {isScanning && (
        <div className="scanning-status">
          <p>Scanning the network, please wait...</p>
          {/* You can add a spinner or loading indicator here */}
        </div>
      )}

      {scanCompleted && results && (
        <div className="scan-results">
          <h3>Scan Results</h3>
          <p><strong>Total Hosts Scanned:</strong> {results.totalHostsScanned}</p>
          <p><strong>Active Hosts:</strong> {results.activeHosts}</p>
          <p><strong>Open Ports:</strong> {results.openPorts}</p>
          <p><strong>Vulnerabilities Found:</strong> {results.vulnerabilitiesFound}</p>
          <button onClick={startScan}>Run Another Scan</button>
        </div>
      )}
    </div>
  );
}

export default NetworkScannerPage;
