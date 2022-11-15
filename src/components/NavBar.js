import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="item" to="/">
          <img
            className="logo"
            src="/logos/logo.png"
            alt="company logo of Surreal Estate"
          />
        </Link>
        <ul className="navbar-links">
          <li className="navbar-link-item">
            <Link className="item" to="/properties">
              View Properties
            </Link>
          </li>
          <li className="navbar-link-item">
            <Link className="item" to="/addproperties">
              Add a Property
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
