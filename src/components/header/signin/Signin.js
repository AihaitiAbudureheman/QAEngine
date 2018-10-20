import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import Divider from "material-ui/Divider";

import "./Signin.css";

const style = {
  color: "#3797DA",
  textTransform: "capitalize"
};

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Signin extends React.Component {
  state = {
    open: false
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
        label="Close"
        primary={true}
        labelStyle={style}
        onClick={this.handleClose}
      />
    ];

    return (
      <span className="join-container">
        <span onClick={this.handleOpen}>Sign in</span>
        <Dialog
          title="Sign In"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="action-buttons">
              <p>
                <span className="btn btn-primary">Sign in</span>
                <span class="btn btn-link">
                  <i>Forgot password</i>
                </span>
              </p>
            </div>
            <Divider />
          </form>
        </Dialog>
      </span>
    );
  }
}
