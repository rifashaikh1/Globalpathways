import React from "react";
import "../styles/home.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Global Pathways AI
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Product</li>
        <li>Success Stories</li>
        <li>Contact</li>
      </ul>

      <button className="nav-btn">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;