import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



import './SideNav.css';


class SideNav extends Component {
    render() {
        return (
            <div className="left-side-nav">
                <div>
                    <NavLink to="/tags">
                        <i className="material-icons">loyalty</i>
                        Tags
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/badges">
                        <i className="material-icons">filter_vintage</i>
                        Badges
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/category">
                        <i className="material-icons">list</i>
                        Categories
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/users">
                        <i className="material-icons">group_work</i>
                        Users
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SideNav;