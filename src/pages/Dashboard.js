import React from 'react';

const UserDashboardPage = () => {
  const pageStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  const contentStyle = {
    maxWidth: '400px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>User Dashboard</h2>
        <p style={paragraphStyle}>
          Welcome to your dashboard! Here you can access and manage your account information.
        </p>
      </div>
    </div>
  );
};

export default UserDashboardPage;
