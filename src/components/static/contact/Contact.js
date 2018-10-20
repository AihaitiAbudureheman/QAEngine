import React, { Component } from 'react';
import image from '../../../media/bird.png';



import './Contact.css';


class Privacy extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="row toolbars">
          <div className="col-md-12 toolbars-title">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-12">
            <img src={image} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-md-12">
            <p className="description">Contact us:</p>
            <p className="description">ADDRESS:</p>
            <p className="description">B.S. Sound 999 Cromwell St, Glen Iris</p>
            <p className="description">Victoria 00-000, Australia</p>
            <p className="description">EMAIL: support@enginethemes.com</p>
            <p className="description">PHONE:+49 1234 80-0 00</p>
            <p className="description">FAX:+49 1234 80-0 00</p>
            <p className="description">MOBILE:+49 1234 80-0 00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Privacy;