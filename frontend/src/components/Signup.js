// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Password Validation Function
  const isValidPassword = (password) => {
    const minLength = /.{9,}/; // At least 9 characters
    const hasUppercase = /[A-Z]/; // At least 1 uppercase letter
    const hasLowercase = /[a-z]/; // At least 1 lowercase letter
    const hasNumber = /[0-9]/; // At least 1 number
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least 1 special character

    if (!minLength.test(password)) return 'Password must be at least 9 characters long.';
    if (!hasUppercase.test(password)) return 'Password must contain at least 1 uppercase letter.';
    if (!hasLowercase.test(password)) return 'Password must contain at least 1 lowercase letter.';
    if (!hasNumber.test(password)) return 'Password must contain at least 1 number.';
    if (!hasSpecialChar.test(password)) return 'Password must contain at least 1 special character.';
    return '';
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Password validation
    const passwordValidationError = isValidPassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Clear errors and proceed to signup logic
    setError('');
    setPasswordError('');

    // Implement actual signup logic here (e.g., API call)
    // On success:
    navigate('/login');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`signup-page ${isDarkMode ? 'dark' : 'light'}`}>

      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Signup</h2>
          {error && <div className="error">{error}</div>}
          {passwordError && <div className="error">{passwordError}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Signup;
