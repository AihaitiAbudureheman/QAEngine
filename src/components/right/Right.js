import React, { Component } from 'react';
import AppStat from './appStats/AppStat';
import TagStat from './tagStats/TagStat';
import HotQ from './hotQ/HotQ';
import TopP from './topP/TopP';
import TopQ from './topQ/TopQ';
import TopA from './topA/TopA';
import TopU from './topU/TopU';


import './Right.css';


class RightNav extends Component {
  render() {
    return (
      <div className="right-container">
        <AppStat />
        <TagStat />
        <HotQ />
        <TopP />
        <TopQ />
        <TopA />
        <TopU />
      </div>
    );
  }
}

export default RightNav;