import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './TopP.css';


class TopP extends Component {
  render() {
    return (
        <div class="points-stats">
          <h4>TOP USERS(POINTS)</h4>
          <Divider />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
                <div class="col-md-6">
                  <i class="material-icons">star_rate</i>
                  <span className="points">34k</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
                <div class="col-md-6">
                  <i class="material-icons">star_rate</i>
                  <span className="points">34k</span>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
                <div class="col-md-6">
                  <i class="material-icons">star_rate</i>
                  <span className="points">34k</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );
  }
}

export default TopP;