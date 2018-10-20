import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

import './HotQ.css';


class HotQ extends Component {
  render() {
    return (
      <div className="hot-questions">
          <h4>HOT QUESTIONS</h4>
          <Divider />
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <img src="https://robohash.org/sedarchitectocumque.bmp?size=50x50&set=set1" />
              <Link to="/questionDetails">What are the best mobile apps for using in travel?</Link>
            </li>
            <li class="list-group-item">
              <img src="https://robohash.org/sedarchitectocumque.bmp?size=50x50&set=set1" />
              <Link to="/questionDetails"> What are the best mobile apps for using in travel?</Link>
            </li>

            <li class="list-group-item">
              <img src="https://robohash.org/sedarchitectocumque.bmp?size=50x50&set=set1" />
              <Link to="/questionDetails"> What are the best mobile apps for using in travel?</Link>
            </li>

            <li class="list-group-item">
              <img src="https://robohash.org/sedarchitectocumque.bmp?size=50x50&set=set1" />
              <Link to="/questionDetails"> What are the best mobile apps for using in travel?</Link>
            </li>

            <li class="list-group-item">
              <img src="https://robohash.org/sedarchitectocumque.bmp?size=50x50&set=set1" />
              <Link to="/questionDetails"> What are the best mobile apps for using in travel?</Link>
            </li>
          </ul>
        </div>
    );
  }
}

export default HotQ;