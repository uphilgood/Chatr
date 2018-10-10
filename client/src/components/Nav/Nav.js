import React from "react";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/chat">
      Chatr
    </a>
    <a className="navbar-brand" href="/">
      Login
    </a>
    <a className="navbar-brand" href="/register">
      Register
    </a>
  </nav>
);

export default Nav;
