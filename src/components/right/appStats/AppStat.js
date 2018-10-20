import React, { Component } from 'react';

import './AppStat.css';


class AppStat extends Component {
  render() {
    return (
      <div className="appStat-container">
         <div class="row question-stats">
         <div class="col-md-12">
           <p>Questions</p>
           <h1>234</h1>
         </div>
       </div>
       <div class="row member-stats">
         <div class="col-md-12">
           <p>Members</p>
           <h1>234,345</h1>
         </div>
       </div>
      </div>
    );
  }
}

export default AppStat;