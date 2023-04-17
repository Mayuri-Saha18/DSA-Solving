import React from "react";
import './HomePage.css';

export const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/dashboard">Go to Dashboard</a>
          </li>
        </ul>
      </nav>
      <div className="text">
        <h2 className="h2">Welcome to</h2>
        <h1 className="h1">Expense Tracker App</h1>
      </div>
    </div>
  );
};
