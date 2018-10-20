import React, { Component } from 'react';
import Divider from 'material-ui/Divider';



import './QuestionContent.css';


class QuestionContent extends Component {
  render() {
    return (
        <div className="row question-content">
          <div className="col-md-2 question-voter">
            <div>
              <i class="material-icons">keyboard_arrow_up</i>
            </div>
            <div>
              <button type="button" class="btn btn-info">23</button>
            </div>
            <div>
              <i class="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
          <div className="col-md-10 question-tags-desc">
            <div className="q-tags">
              <button type="button" class="btn btn-success">
                <i class="material-icons">check</i>
                Answered
              </button>
              <button type="button" class="btn tags-btn">Business</button>
              <button type="button" class="btn tags-btn">Reactjs</button>
            </div>
            <div className="q-desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
            </div>
            <Divider />
            <div className="row question-info-row">
              <div className="col-md-10 question-creator-info">
                <p>
                  <img className="avatar" src="https://robohash.org/temporibusdoloredeleniti.jpg?size=50x50&set=set1" alt="Avatar" />
                  <span className="question-author">Engine Admin Demo</span>
                  <button type="button" className="btn btn-info question-author-title">Train</button>
                  <span className="question-time">Asked on July 14, 2016 in <a href="" className="question-cat">Business</a></span>
                </p>
              </div>
              <div className="col-md-2 share-btn">
                <p>
                  <span>Share</span>
                  <i class="material-icons">share</i>
                </p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default QuestionContent;