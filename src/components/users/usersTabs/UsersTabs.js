import React, { Component } from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import UsersList from '../usersList/UsersList';

import './UsersTabs.css'

class UsersTabs extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab-example"
      >
        <Tab eventKey={1} title="Name">
          <UsersList />
        </Tab>
        <Tab eventKey={2} title="Points">
          <UsersList />
        </Tab>
      </Tabs>
    );
  }
}

export default UsersTabs;