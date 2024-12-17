// src/components/HoneypotPage.js
import React from 'react';

const HoneypotPage = () => {
  return (
    <div style={{
      background: 'linear-gradient(white, #E0E7FF)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        padding: '30px'
      }}>
        <h1 style={{ color: '#1E3A8A', marginBottom: '20px' }}>Honeypot Tool</h1>
        <p style={{ color: '#333', lineHeight: '1.6' }}>
          The Honeypot Tool is designed to simulate vulnerable network services to attract and log malicious activity. 
          By deploying this tool, security professionals can analyze attack patterns, 
          study unauthorized intrusion attempts, and strengthen network defenses based on real-world data.
        </p>

        <div style={{ marginTop: '20px' }}>
          <a 
            href="#"
            // In a real scenario, you would provide a real download link here
            // e.g. href="http://example.com/honeypot-tool.zip"
            style={{
              display: 'inline-block',
              backgroundColor: '#1E40AF',
              color: '#ffffff',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            Download Honeypot Tool
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoneypotPage;
