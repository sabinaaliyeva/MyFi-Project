import React, { useState } from 'react';
import './Account.css';

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Implement account update logic here (e.g., API call)
    alert('Account updated successfully!');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`account-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="account-card">
        <h2>Account Information</h2>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" placeholder="Your username" disabled />
          </div>
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
          <button type="submit">Update Account</button>
        </form>
      </div>

      {/* Dark Mode Toggle Button */}
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Account;
