import React, { Component } from 'react';

import './Tag.css';


class Tag extends Component {
  render() {
    return (
      <div className="tag-container">
        <div className="row tags-row">
            <div className="col-md-3">
              <div className="button-line">
                <button type="button" className="btn btn-info">business</button>
                <span className="x-letter">x</span>
                <span>5</span>
              </div>
              <div className="tag-stats">
                <p>
                  <span> 5 </span>
                  <span>today </span>
                  , 
                  <span> 32 </span>
                  <span>this week </span>
                  , 
                  <span> 56 </span>
                  <span>this month </span>
                </p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Tag;