import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './TagStat.css';


class TagStat extends Component {
  render() {
    return (
        <div class="tags-stats">
          <h4>MOST USED TAGS</h4>
          <Divider />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <button type="button" class="btn">
                business
              </button>
              <span>x</span>
              <span>12</span>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn">
                business
              </button>
              <span>x</span>
              <span>12</span>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn">
                business
              </button>
              <span>x</span>
              <span>12</span>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn">
                business
              </button>
              <span>x</span>
              <span>12</span>
            </li>
            <li class="list-group-item">
              <button type="button" class="btn">
                business
              </button>
              <span>x</span>
              <span>12</span>
            </li>
          </ul>
          <button type="button" class="btn btn-link">See more tags</button>
        </div>
    );
  }
}

export default TagStat;