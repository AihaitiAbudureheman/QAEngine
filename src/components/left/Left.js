import React, { Component } from 'react';
import Ask from './askQuestion/Ask';
import Divider from 'material-ui/Divider';
import SideNav from './sideNav/SideNav';

import Footer from '../footer/Footer';

import './left.css';


class LeftSide extends Component {
    render() {
        return (
            <div className="left-container">
                <div className="row">
                    <div className="col-md-12">
                        <Ask />
                        <Divider />
                    </div>
                    <div className="col-md-12">
                        <SideNav />
                    </div>
                    <div className="col-md-12">
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}

export default LeftSide;
