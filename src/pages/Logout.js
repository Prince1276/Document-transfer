import React, { useState } from 'react';

const LoginPage = () => {
  const pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  const formStyle = {
    maxWidth: '400px',
    width: '100%',
  };

  const labelStyle = {
    marginBottom: '8px',
    display: 'block',
    textAlign: 'left',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted!');
  };

  return (
    <div style={pageStyle}>
      <div>
        <h2>Login</h2>
        <form style={formStyle} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label htmlFor="password" style={labelStyle}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
