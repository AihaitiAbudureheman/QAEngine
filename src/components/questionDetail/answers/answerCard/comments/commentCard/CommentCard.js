import React, { Component } from 'react';




import './CommentCard.css';


class CommentCard extends Component {
  render() {
    return (
      <div className="comment-card-container">
        <div className="row">
          <div className="col-md-2 comment-owner">
            <img src="https://robohash.org/utrepellendusea.jpg?size=50x50&set=set1" />
            <p>John Smith</p>
          </div>
          <div className="col-md-10 comment-desc-time">
              <div className="comment-desc">
                  Don’t forget to tell us what your favorite Android apps are in the comments section below.
              </div>
              <div className="comment-time">
                  on June 5, 2014.
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentCard;