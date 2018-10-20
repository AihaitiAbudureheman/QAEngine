import React, { Component } from "react";
import TagTabs from "./tagTabs/TagTabs";

import "./Tags.css";

class Tags extends Component {
  render() {
    return (
      <div className="tags-container">
        <div className="row toolbars">
          <div className="col-xs-6 toolbars-title">
            <h2>All tags</h2>
          </div>
          <div className="col-xs-6 toolbars-search">
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Find your tags..."
              />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 tabs-row">
            <TagTabs />
          </div>
        </div>
      </div>
    );
  }
}

export default Tags;
