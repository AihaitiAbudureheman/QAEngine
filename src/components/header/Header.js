import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import User from "./user/User";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";

// Header components
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="row">
          <div className="col-md-2 brand-name">
            <h2>QAEngine</h2>
          </div>
          <div className="col-md-4 search-field">
            <input
              className="form-control"
              type="text"
              placeholder="Enter keyword..."
            />
          </div>
          <div className="col-md-4 navigation">
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs">
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-2 LoginBtn">
            <Signin />
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
