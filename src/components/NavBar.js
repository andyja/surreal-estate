import React from "react";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img className="logo" src="/logos/logo.png" alt="company logo" />
      {/* <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul> */}
    </div>
  );
};
export default NavBar;
