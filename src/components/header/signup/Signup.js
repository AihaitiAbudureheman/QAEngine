import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { Link } from "react-router-dom";
import Divider from "material-ui/Divider";

import "./Signup.css";

const style = {
  color: "#3797DA",
  textTransform: "capitalize"
};

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Signup extends React.Component {
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
        <span onClick={this.handleOpen}>Sign up</span>
        <Dialog
          title="Sign Up"
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
            <div class="form-group">
              <label for="exampleInputPassword2">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm password"
              />
            </div>
            <div className="sign-up-info">
              <p>
                <span>
                  By clicking "Sign up" you indicate that you have read and
                  agree to the
                </span>
                <Link className="sign-up-link" to="/privacy">
                  Privacy policy
                </Link>
                <span> and </span>
                <Link className="sign-up-link" to="/terms">
                  Terms of service
                </Link>
              </p>
            </div>
            <Divider />
          </form>
        </Dialog>
      </span>
    );
  }
}
