import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import "../css/header.css";

function HeaderComponent(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <a className="navbar-brand" href="https://easyescrow.io">
          <img
            alt="flashloan logo"
            src="assets/logo.svg"
            //   style={{ width: "50px" }}
          ></img>
        </a>

        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item header-menu">
              <Link className="nav-link" to="/">
                Basic knowledge <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-menu" to="/easyescrow1-4sdk">
                easyescrowSDK.js
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-menu" to="/easyescrow5sdk">
                easypoolSDK.js
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link header-menu" to="/faq">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HeaderComponent;
