import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { RadioButton } from 'material-ui/RadioButton';
import './ProfileEdit.css';

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

export default class ProfileEdit extends React.Component {
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
        label="Update profile"
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
      <div className="profile-edit-container">
        <FlatButton
          label="Edit profile"
          className="edit"
          hoverColor="transparent"
          onClick={this.handleOpen} />
        <Dialog
          title="Edit profile"
          bodyClassName="dialog-content"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <div className="profile-edit-toolbar">
            <div class="row navigations">
              <div class="col-md-1">
                <img src="https://robohash.org/quisquamanimiet.jpg?size=50x50&set=set1" alt="Avatar" />
              </div>
              <div class="col-md-3">
                <button type="button" class="btn btn-link">Upload New Avatar</button>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form>
              <div class="form-group">
                <label for="fullname">Email address</label>
                <input type="text" class="form-control" id="fullname" aria-describedby="fullname" placeholder="Enter full name" />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="location">Location</label>
                <input type="text" class="form-control" id="location" placeholder="Enter location" />
              </div>
              <div class="form-group">
                <label for="facebook">Facebook</label>
                <input type="text" class="form-control" id="facebook" aria-describedby="facebook link" placeholder="Enter facebook link" />
              </div>
              <div class="form-group">
                <label for="twitter">Twitter</label>
                <input type="text" class="form-control" id="twitter" aria-describedby="twitter link" placeholder="Enter twitter link" />
              </div>
              <div class="form-group">
                <label for="google-plus">Google plus</label>
                <input type="text" class="form-control" id="google-plus" aria-describedby="google plus link" placeholder="Enter google plus link" />
              </div>
              <div class="form-group">
                <label for="bio">Short bio</label>
                <textarea class="form-control" id="bio" rows="3"></textarea>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}