// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/best-harvesting">Best Harvesting</Link>
        </li>
        <li>
          <Link to="/choose">Choose</Link>
        </li>
        <li>
          <Link to="/core">Core</Link>
        </li>
        <li>
          <Link to="/innovators">Innovators</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/best-time">Best Time</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
