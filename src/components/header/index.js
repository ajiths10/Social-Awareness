import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Hederlogo from "./logo.png";
import Context from "../../context/Context";
import "./header.css";

const Header = () => {
  const history = useNavigate();
  const { setAuthentication, isAuthenticated } = useContext(Context);
  const [isAuth, setIsAuth] = useState(false);

  const loginBtnHnadler = () => {
    history("/login");
  };

  const logoutBtnHnadler = () => {
    setAuthentication(false);
    history("/login");
  };

  useEffect(() => {
    setIsAuth(isAuthenticated);
    console.log('isAuth',isAuthenticated)
  }, [isAuthenticated]);

  return (
    <div className="header-container">
      <div className="header-ul-container">
        <NavLink to="/" className="header-item">
          *logo
          {/* <img src={Hederlogo} className="App-logo" alt="logo" /> */}
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
      {isAuth ? (
        <button className="user-auth-btn" onClick={logoutBtnHnadler}>
          LOGOUT
        </button>
      ) : (
        <button className="user-auth-btn" onClick={loginBtnHnadler}>
          LOGIN
        </button>
      )}
    </div>
  );
};

export default Header;
