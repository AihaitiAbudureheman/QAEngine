import React, { Component } from 'react';
import ProfileEdit from './profileEdit/ProfileEdit';
import ChangePassword from './changePassword/ChangePassword';

import './Profile.css';


class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="row toolbars">
          <div className="col-md-6 toolbars-title">
            <h2>Aihaiti's Profile</h2>
          </div>
          <div className="col-md-6 toolbars-buttons">
            <button type="button" class="btn btn-link">
              <ProfileEdit />
            </button>
            <button type="button" class="btn btn-link">
              <ChangePassword />
            </button>
            <button type="button" class="btn btn-link">Logout</button>
          </div>
        </div>
        <div className="row statistics">
          <div className="col-md-2 avatar">
            <img src="https://robohash.org/quamomnisvelit.bmp?size=50x50&set=set1" />
          </div>
          <div className="col-md-4 user-info">
            <p className="name">Aihaiti</p>
            <p className="location">
              <i class="material-icons">location_on</i>
              <span>Finland</span>
            </p>
            <p className="email">
              <i class="material-icons">email</i>
              <span>
                Email is hidden
              </span>
            </p>

          </div>
          <div className="col-md-6 user-stats">
            <button type="button" class="btn btn-primary">Professor</button>
            <div className="row">
              <div className="col-md-1">
                <h1>23</h1>
              </div>
              <div className="col-md-1">
                <i class="material-icons">star_rate</i>
                <p>Points</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <p>Questions</p>
                <h2>345</h2>
              </div>
              <div className="col-md-3">
                <p>Answers</p>
                <h2>34</h2>
              </div>
            </div>

          </div>
        </div>

        <div className="row profile-tabs">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Questions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Answers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Following</a>
            </li>
          </ul>
        </div>
        <div className="row tabs-content">
        <h1>This is a common place to render content of different tabs</h1>
        </div>
      </div>
    );
  }
}

export default Profile;