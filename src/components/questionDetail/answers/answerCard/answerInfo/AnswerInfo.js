import React, { Component } from 'react';



import './AnswerInfo.css';


class AnswerInfo extends Component {
    render() {
        return (
            <div className="row answer-info-row">
                <div className="col-md-9 answer-creator-info">
                    <p>
                        <img className="avatar" src="https://robohash.org/temporibusdoloredeleniti.jpg?size=50x50&set=set1" />
                        <span className="answer-author">Engine Admin Demo</span>
                        <button type="button" className="btn btn-info answer-author-title">Train</button>
                        <span className="answer-time">Asked on July 14, 2016 in <a href="#" className="answer-cat">Business</a></span>
                    </p>
                </div>
                <div className="col-md-3 comment-btn">
                    <p>
                        <span>Comment(4)</span>
                        <i class="material-icons">insert_comment</i>
                    </p>
                </div>
            </div>
        );
    }
}

export default AnswerInfo;