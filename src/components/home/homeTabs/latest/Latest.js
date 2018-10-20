import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Location from 'material-ui/svg-icons/communication/location-on';
import QCard from './qCard/QCard';

import './Latest.css';


class Latest extends Component {
    render() {
        return (
            <div className="latest-container">
                <QCard />
            </div>
        );
    }
}

export default Latest;