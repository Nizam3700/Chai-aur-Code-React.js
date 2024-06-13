import React, { useState } from 'react';
import './Head.css'; // Import the CSS file for styling

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Head;
