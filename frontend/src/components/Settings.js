import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save settings logic here (e.g., API call)
    alert('Settings saved successfully!');
    // Reset form or handle state as needed
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="settings-card">
        <h2>Settings</h2>
        <form className="settings-form" onSubmit={handleSave}>
          {/* Username (Read-Only) */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Your username" disabled />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Change Password */}
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter a new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Toggle Email Notifications */}
          <div className="toggle-group">
            <label htmlFor="emailNotifications">Email Notifications</label>
            <input
              id="emailNotifications"
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </div>


          {/* Save Settings Button */}
          <button type="submit">Save Settings</button>
        </form>
      </div>

      {/* Dark Mode Toggle Button */}
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Settings;
