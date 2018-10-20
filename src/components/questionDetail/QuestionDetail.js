import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Qdtoolbar from './questionDetailToolbar/Qdtoolbar';
import QuestionContent from './questionContent/QuestionContent';
import Answers from './answers/Answers';

import './QuestionDetail.css';


class QuestionDetail extends Component {
  render() {
    return (
      <div className="question-detail-container">
        <Qdtoolbar />
        <QuestionContent />
        <Divider />
        <Answers />
      </div>
    );
  }
}

export default QuestionDetail;