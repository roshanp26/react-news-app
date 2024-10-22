// src/components/Login/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = process.env.REACT_APP_USERNAME;
    const storedPassword = process.env.REACT_APP_PASSWORD;

    // Debugging logs
    console.log('Input Username:', username);
    console.log('Input Password:', password);
    console.log('Stored Username:', storedUsername);
    console.log('Stored Password:', storedPassword);

    if (username === storedUsername && password === storedPassword) {
      onLogin(); // Call the onLogin prop to indicate successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const formStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
  };

  const headingStyle = {
    textAlign: 'center',
  };

  const divStyle = {
    marginBottom: '15px',
  };

  const buttonStyle = {
    width: '100%',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>Login</h2>
        <div style={divStyle}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={divStyle}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;
