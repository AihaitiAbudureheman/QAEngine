import React, { Component } from 'react';
import CatTabs from './catTabs/CatTabs'



import './Category.css';


class Category extends Component {
  render() {
    return (
      <div className="category-container">
        <div className="row toolbars">
          <div className="col-xs-6 toolbars-title">
            <h2>All categories</h2>
          </div>
          <div className="col-xs-6 toolbars-search">
            <form>
              <input className="form-control" type="text" placeholder="Find your category..." />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 tabs-row">
            <CatTabs />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;