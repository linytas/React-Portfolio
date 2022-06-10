import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import "../styles/Navbar.css";

function Nav() {
  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <img src={logo} className="logo" alt="" />
          </div>

          <div className="item-list">
            <div className="primary-nav">
              <ul>
                <li className="nav-item">
                  <Link to="/home" className="nav-links">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-links">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-links">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
