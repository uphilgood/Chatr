import React from "react";
import logo from "../../public/images/chatr-logo.png";
import "../Nav/nav.css";

const Nav = (props) => (
  // <nav className="navbar navbar-expand-lg navbar-dark">
  //   <a className="navbar-brand" href="/">
  //     Login
  //   </a>
  //   <a className="navbar-brand" href="/register">
  //     Register
  //   </a>
  // </nav>
      <nav className="navbar-expand-lg">
      <div className="nav-wrapper">
        <div className="brand-logo"><img src={logo} style={{width:"5em", marginLeft:"10%"}} /></div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a className="navbar-brand" href="/">Login</a></li>
          <li><a className="navbar-brand" href="/register">Sign Up</a></li>
        </ul>
      </div>
    </nav>
);

export default Nav;
