import React, { Component } from 'react';
import AnswerTabs from './answerTabs/AnswerTabs';
import AnswerCard from './answerCard/AnswerCard';



import './Answers.css';


class Answers extends Component {
    render() {
        return (
            <div>
                <AnswerTabs />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
            </div>
        );
    }
}

export default Answers;