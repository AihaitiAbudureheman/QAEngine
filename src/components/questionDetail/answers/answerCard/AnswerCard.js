import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Avoter from './answerVoter/Avoter';
import AnswerContent from './answerContent/AnswerContent';




import './AnswerCard.css';


class AnswerCard extends Component {
    render() {
        return (
            <div className="answer-card-container">
                <div className="row answer-content">
                    <Avoter />
                    <AnswerContent />
                    <Divider />
                    </div>
                </div>
            )
    }
}

export default AnswerCard;