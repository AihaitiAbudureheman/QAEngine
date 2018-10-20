import React, { Component } from 'react';



import './Avoter.css';


class Avoter extends Component {
    render() {
        return (
            <div className="col-md-2 answer-voter">
                <div>
                    <i class="material-icons">keyboard_arrow_up</i>
                </div>
                <div>
                    <button type="button" class="btn btn-info">23</button>
                </div>
                <div>
                    <i class="material-icons">keyboard_arrow_down</i>
                </div>
            </div>
        );
    }
}

export default Avoter;