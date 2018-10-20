import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import QuestionDetails from '../../../../../components/questionDetail/QuestionDetail';


import './QCard.css';


class QCard extends Component {
    render() {
        return (
            <div className="row question-card">
                <div className="col-sm-6">
                    <div className="question-title">
                        <h3>
                            <Link to="/QuestionDetails">What is business?</Link>
                        </h3>
                    </div>
                    <div className="question-desc">
                        <p>I want to know more about business processes! Please tell me more!</p>
                    </div>
                    <div className="question-tags">
                        <button type="button" class="btn">Business</button>
                        <button type="button" class="btn">Education</button>
                        <button type="button" class="btn">Skiing</button>
                        <button type="button" class="btn">Transportation</button>
                    </div>
                    <div className="question-info">
                        <p>
                            <img className="avatar" src="https://robohash.org/temporibusdoloredeleniti.jpg?size=50x50&set=set1" />
                            <span className="question-author">Engine Admin Demo</span>
                            <button type="button" className="btn btn-info question-author-title">Train</button>
                            <span className="question-time">Asked on July 14, 2016 in <a href="#" className="question-cat">Business</a></span>
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="col-sm-6 stats">
                    <button type="button" className="btn btn-success">
                        Views <span className="badge badge-light">1,234,345</span>
                    </button>
                    <button type="button" className="btn btn-info">
                        Answers <span className="badge badge-light">12</span>
                    </button>
                    <button type="button" className="btn btn-primary">
                        Votes <span className="badge badge-light">98</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default QCard;