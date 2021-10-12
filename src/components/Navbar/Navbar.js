import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          Cook <span>Book</span>
        </h1>
      </div>
      <div className="navbar-links">
          <Link to="/">{" "} Home</Link>
          <Link to="/recipes">{" "} Recipes </Link>
          <Link to="/categories">{" "}Categories </Link>
          <a href="/about"> About</a>
          <Link to="/contact">{" "} Contact </Link>
      </div>
    </div>
  );
};

export default Navbar;
    