import React, { Component } from 'react';

import './CatList.css';


class CatList extends Component {
    render() {
        return (
            <div className="cat-container">
                <div className="row cat-row">
                    <div className="col-md-3">
                        Business
                    </div>
                    <div className="col-md-3">
                    Classifieds
                    </div>
                    <div className="col-md-3">
                    Questions 
                    </div>
                    <div className="col-md-3">
                        Economy
                    </div>
                </div>
            </div>
        );
    }
}

export default CatList;