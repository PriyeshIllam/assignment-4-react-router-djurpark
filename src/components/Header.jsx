import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { FiSearch } from 'react-icons/fi';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <img src={logo} alt="Djurpark Logo" className="header-logo" />
      <h1 className="header-title">Djurpark – Australian Animals</h1>
    </div>

    <nav className="nav-menu">
      <NavLink to="/" exact="true" className="nav-link" activeclassname="active">Home</NavLink>
      <NavLink to="/mammals" className="nav-link" activeclassname="active">Mammals</NavLink>
      <NavLink to="/reptiles" className="nav-link" activeclassname="active">Reptiles</NavLink>
      <NavLink to="/birds" className="nav-link" activeclassname="active">Birds</NavLink>
    </nav>

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
