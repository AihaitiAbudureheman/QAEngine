import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Divider from 'material-ui/Divider';


// Home components
import './PerPage.css';


class PerPage extends Component {
  render() {
    return (
      <div className="perClass-container">
        <ButtonToolbar>
          <DropdownButton title="Questions per page" id="dropdown-size-medium">
            <MenuItem eventKey="1">5</MenuItem>
            <MenuItem eventKey="2">10</MenuItem>
            <MenuItem eventKey="3">20</MenuItem>
            <MenuItem eventKey="1">30</MenuItem>
            <MenuItem eventKey="2">50</MenuItem>
            <MenuItem eventKey="3">100</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default PerPage;