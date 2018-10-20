import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import FontIcon from 'material-ui/FontIcon';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import Profile from '../../profile/Profile';

import './User.css';


export default class User extends React.Component {

  render() {
    return (
      <div className="user-dropdown">
        <div class="dropdown show">
          <a class="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Aihaiti
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <NavLink class="dropdown-item" to="/profile">User profile</NavLink>
            <NavLink class="dropdown-item" to="/logout">Logout</NavLink>
          </div>
        </div>
      </div>
    );
  }
}