import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './Nav.css';


class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/tags">Home</Link></li>
          <li><Link to="/badges">About us</Link></li>
          <li><Link to="/category">Contact</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;