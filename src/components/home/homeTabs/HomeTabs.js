import React, { Component } from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import Latest from './latest/Latest';

import './HomeTabs.css'

class HomeTabs extends React.Component {
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
        <Tab eventKey={1} title="Latest">
          <Latest />
          <Latest />
          <Latest />
        </Tab>
        <Tab eventKey={2} title="Votes">
          <Latest />
        </Tab>
        <Tab eventKey={3} title="Unanswered">
          <Latest />
        </Tab>
      </Tabs>
    );
  }
}

export default HomeTabs;