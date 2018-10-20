import React, { Component } from 'react';
import AnswerInfo from '../answerInfo/AnswerInfo';
import Comments from '../comments/Comments';



import './AnswerContent.css';


class AnswerContent extends Component {
    render() {
        return (
            <div className="col-md-10 answer-tags-desc">
                <div className="a-tags">
                    <button type="button" class="btn btn-success">
                        <i class="material-icons">check</i>
                        Best answer
                    </button>
                    <button type="button" class="btn tags-btn">Business</button>
                    <button type="button" class="btn tags-btn">Reactjs</button>
                </div>
                <div className="a-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               </div>
               <AnswerInfo />
               <Comments />
            </div>
        );
    }
}

export default AnswerContent;