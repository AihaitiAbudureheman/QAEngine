import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Location from 'material-ui/svg-icons/communication/location-on';

import Users from '../../../data/mock_users.json'
import './UsersList.css';


class UsersList extends Component {
    render() {
        return (
            <div className="users-container">
                <div className="row tags-row">
                    <div className="col-md-3 single-user-container">
                        <div className="media">
                            <img className="mr-3" src="https://robohash.org/aliquamvelitquia.jpg?size=50x50&set=set1" alt="Generic placeholder image" />
                            <div className="media-body">
                                <h5 className="mt-0">John Smith</h5>
                                <p>
                                    <i className="material-icons">location_on</i>
                                    <span className="country">Finland</span>
                                </p>
                                <p>
                                    <span className="btn btn-success">
                                        Professor
                                    </span>
                                    <span className="points">
                                        1234 points
                                    </span>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UsersList;