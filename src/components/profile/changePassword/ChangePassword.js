import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton } from 'material-ui/RadioButton';
import './ChangePassword.css';

const styles = {
  radioButton: {
    marginTop: 16,
  },
  editButton: {
    position: 'relative',
    top: '-7px',
  },
  submitButton: {
    backgroundColor: '#3E98D9',
    color: '#fff',
    textTransform: 'none',
    position: 'relative',
    right: '16px'
  },
  cancelButton: {
    color: '#3E98D9',
    position: 'relative',
    right: '16px'   
  },
  labelStyle: {
    textTransform: 'none',
  },
  cancelLabelStyle: {
    textTransform: 'none',
  }
}

export default class ChangePassword extends React.Component {
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
        style={styles.cancelButton}
        onClick={this.handleClose}
        labelStyle={styles.cancelLabelStyle}
      />,
      <FlatButton
        label="Update password"
        primary={true}
        keyboardFocused={true}
        style={styles.submitButton}
        onClick={this.handleClose}
        labelStyle={styles.labelStyle}
      />,
    ];

    const radios = [];
    for (let i = 0; i < 30; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div className="password-edit-container">
        <FlatButton
          label="Change password"
          className="edit"
          hoverColor="transparent"
          onClick={this.handleOpen} />
        <Dialog
          title="Change password"
          bodyClassName="dialog-content"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div className="form-container">
            <form>
              <div class="form-group">
                  <label for="oldPassword">Old password</label>
                  <input type="password" class="form-control" id="oldPassword" placeholder="Old password" />
              </div>
              <div class="form-group">
                  <label for="newPassword">New password</label>
                  <input type="password" class="form-control" id="newPassword" placeholder="New password" />
              </div>
              <div class="form-group">
                  <label for="repeatNewPassword">Repeat new password</label>
                  <input type="password" class="form-control" id="repeatNewPassword" placeholder="Repeat new password" />
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}