import React, { useState } from 'react';
import './Header.css';

import logo from './Ethereumlogo.png';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleUserIconClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1 className="headerp1">This is the header</h1>
      <div className="user-icon" onClick={handleUserIconClick}>
      <img src={logo} alt="Logo" className="logo" />
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <ul>
            <li>
              <button onClick={handleDropdownItemClick}>Settings</button>
            </li>
            <li>
              <button onClick={handleDropdownItemClick}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
