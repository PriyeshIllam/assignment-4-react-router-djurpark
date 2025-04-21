import React from 'react';
import logo from '../assets/logo/logo.png';
import { FiSearch } from 'react-icons/fi';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Djurpark Logo" className="header-logo" />
      <h1 className="header-title">Djurpark – Australian Animals</h1>
    </div>
    <div className="search-container">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search animals..."
        className="search-input"
      />
    </div>
  </header>
);

export default Header;
