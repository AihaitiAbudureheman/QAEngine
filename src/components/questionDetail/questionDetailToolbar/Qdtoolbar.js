import React, { Component } from 'react';
import { Link } from 'react-router-dom';



import './Qdtoolbar.css';


class Qdtoolbar extends Component {
  render() {
    return (
      <div className="row question-detail-toolbar">
          <div className="col-md-2 breadcrumb">
            <i class="material-icons">chevron_left</i>
            <Link to="/home"> Home </Link>
          </div>
          <div className="col-md-10 question-title">
            <h3>What is business?</h3>
          </div>
        </div>
    );
  }
}

export default Qdtoolbar;