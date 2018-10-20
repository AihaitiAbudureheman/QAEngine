import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './TopU.css';


class TopU extends Component {
  render() {
    return (
        <div class="top-users-stats">
          <h4>TOP USERS(LATEST)</h4>
          <Divider />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );
  }
}

export default TopU;