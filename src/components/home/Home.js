import React, { Component } from "react";
import HomeTabs from "./homeTabs/HomeTabs";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="row toolbars">
          <div className="col-xs-6 toolbars-title">
            <h2>All Questions</h2>
          </div>
          <div className="col-xs-6 toolbars-search">
            <div className="dropdown show">
              <label>Filter by</label>
              <a
                className="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select category
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 tabs-row">
            <HomeTabs />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
