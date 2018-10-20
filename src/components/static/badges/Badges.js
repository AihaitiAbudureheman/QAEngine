import React, { Component } from 'react';



import './Badges.css';


class Badges extends Component {
  render() {
    return (
      <div className="badges-container">
        <div className="row toolbars">
          <div className="col-md-12 toolbars-title">
            <h2>Badges</h2>
          </div>
        </div>
        <div className="row subtitles">
          <div className="col-md-12">
            <h3>Point system</h3>
            <p>You earn reputation when people vote on your posts</p>
          </div>
        </div>
        <div className="row points">
          <div className="col-md-3 badge-card">
            <div className="row">
              <div className="col-md-2">
                <h1>+2</h1>
              </div>
              <div className="col-md-10">
                <i className="material-icons">star_rate</i>
                <p>Create a question</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row badges">
          <div className="row subtitles">
            <div className="col-md-12">
              <h3>Badges System</h3>
              <p>You earn reputation when people vote on your posts</p>
            </div>
          </div>
        </div>
        <div className="row badges-system">
          <div className="col-md-4 badge-title">
            <button type="button" className="btn btn-success">Professor</button>
            <div className="row">
              <div className="col-md-4">
                <h1>+2400</h1>
              </div>
              <div className="col-md-8">
                <i className="material-icons">star_rate</i>
                <p>Create a question</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 check-list">
            <div className="row">
              <div className="col-md-12">
                <h5>You can:</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
              </div>
              <div className="col-md-4">
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
                <p>
                  <i className="material-icons">check</i>
                  Edit other people's questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;