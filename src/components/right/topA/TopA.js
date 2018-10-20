import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './TopA.css';


class TopA extends Component {
  render() {
    return (
        <div class="top-answers-stats">
          <h4>TOP USERS(ANSWERS)</h4>
          <Divider />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <span className="rank">1</span>
                  <span className="name">Alex</span>
                </div>
                <div class="col-md-6">
                <i class="material-icons">message</i>
                  <span className="points">34</span>
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
                <i class="material-icons">message</i>
                  <span className="points">34</span>
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
                <i class="material-icons">message</i>
                  <span className="points">34</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
    );
  }
}

export default TopA;