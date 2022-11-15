import React from "react";
// import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img
          className="logo"
          src="/logos/logo.png"
          alt="company logo of Surreal Estate"
        />
        {/* <ul className="navbar-links">
          <li className="navbar-link-item">
            <Link className="item" to="/">
              View Properties
            </Link>
          </li>
          <li className="navbar-link-item">
            <Link className="item" to="add-property">
              Add a Property
            </Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default NavBar;
