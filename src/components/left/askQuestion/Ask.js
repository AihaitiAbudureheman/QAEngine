import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AskIcon from 'material-ui/svg-icons/action/help-outline';

import './Ask.css';

const styles = {
    button: {
        height: '48px',
        lineHeight: '48px',
        fontSize: '12px',
        width: '100%',
    },
    label: {
        fontSize: '13px',
    },
    submitButton: {
        backgroundColor: '#3E98D9',
    },
    labelStyle: {
        fontSize: '12px',
        texttransform: 'none',
    }

};



class Ask extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                labelStyle={styles.labelStyle}
                onClick={this.handleClose}
            />,
            <RaisedButton
                label="Submit Question"
                primary={true}
                buttonStyle={styles.submitButton}
                backgroundColor="#3E98D9"
                labelStyle={styles.labelStyle}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div className="ask-button">
                <RaisedButton
                    backgroundColor="#3797DA"
                    className="askBtn"
                    labelColor="#ffffff"
                    label="ASK QUESTION"
                    style={styles.button}
                    labelStyle={styles.label}
                    icon={<AskIcon color={'#ffffff'} />}
                    onClick={this.handleOpen} />
                <Dialog
                    title="Ask a Question"
                    actions={actions}
                    modal={true}
                    bodyClassName="main-content"
                    open={this.state.open}
                >
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" id="question-title" placeholder="Your Question" />
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="question-category">
                            <option>Business</option>
                            <option>IT</option>
                            <option>Culture</option>
                            <option>Nature</option>
                            <option>Arts</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="question-description" rows="3">
                            Enter more information about the current question.
                        </textarea>
                    </div>
                    <div class="form-group">
                        <select class="form-control" id="question-tags">
                            <option>Tag( max 5 tags)</option>
                            <option>IT</option>
                            <option>Culture</option>
                            <option>Nature</option>
                            <option>Arts</option>
                        </select>
                    </div>
                </form>
                </Dialog>
            </div>
        );
    }
}
export default Ask;