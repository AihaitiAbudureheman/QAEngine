import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div>&copy;2018</div>
        <div>
          <Link to="/terms">Terms & </Link>
          <Link to="/privacy"> Privacy</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
