import React, { Component } from 'react';



import './AnswerTabs.css';


class AnswerTabs extends Component {
    render() {
        return (
            <div className="row answer-tabs">
                <div className="col-md-6 answer-tab-header">
                    <p>
                        <span className="ansowers-count">3</span>
                        <span className="Answer-toolbar-header">Answer</span>
                        <span className="plurals">(s)</span>
                    </p>
                </div>
                <div className="col-md-6 answer-tabs-tab">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Votes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Latest</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AnswerTabs;