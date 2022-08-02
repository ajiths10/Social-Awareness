import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-ul-container">
        <NavLink to="/" className="header-item">
          logo
        </NavLink>
        <NavLink to="/" className="header-item">
          HOME
        </NavLink>
        <NavLink to="/posts" className="header-item">
          POSTS
        </NavLink>
        <NavLink to="/contactus" className="header-item">
          CONTACT
        </NavLink>
      </div>
      <button className="user-auth-btn">LOGIN</button>
    </div>
  );
};

export default Header;
