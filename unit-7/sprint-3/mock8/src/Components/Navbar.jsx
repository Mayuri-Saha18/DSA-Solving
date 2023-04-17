import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/signup">User Register</a></li>
        <li><a href="/signin">User Sign-In</a></li>
        <li><a href="/adminlogin">Admin Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
