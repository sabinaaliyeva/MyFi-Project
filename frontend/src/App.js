// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Account from './components/Account';
import NetworkScanner from './components/NetworkScanner';
import NetworkScannerPage from './components/NetworkScannerPage';
import AttackDetector from './components/AttackDetector';
import AttackDetectorPage from './components/AttackDetectorPage';
import Honeypot from './components/Honeypot';
import HoneypotPage from './components/HoneypotPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Home />} />
            <Route path="/settings" element={isAuthenticated ? <Settings /> : <Home />} />
            <Route path="/account" element={isAuthenticated ? <Account /> : <Home />} />
            <Route path="/networkscanner" element={<NetworkScanner />} /> 
            <Route path="/network-scanner" element={<NetworkScannerPage />} />
            <Route path="/networkdetector" element={<AttackDetector />} />
            <Route path="/network-detector" element={<AttackDetectorPage />} />
            <Route path="/honeypot" element={<Honeypot />} />
            <Route path="/honeypotpage" element={<HoneypotPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
