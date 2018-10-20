import React, { Component } from 'react';
import UsersTabs from './usersTabs/UsersTabs'



import './Users.css';


class Users extends Component {
  render() {
    return (
      <div className="users-container">
        <div className="row toolbars">
          <div className="col-xs-6 toolbars-title">
            <h2>All users</h2>
          </div>
          <div className="col-xs-6 toolbars-search">
            <form>
              <input className="form-control" type="text" placeholder="Find users..." />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 tabs-row">
            <UsersTabs />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;