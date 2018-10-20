import React, { Component } from 'react';
import image from '../../../media/bird.png';



import './AboutUs.css';


class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus-container">
        <div className="row toolbars">
          <div className="col-md-12 toolbars-title">
            <h2>About us</h2>
          </div>
        </div>
        <div className="row content">
          <div className="col-md-12">
            <img src={image} className="img-fluid" alt="Responsive image" />
          </div>
          <div className="col-md-12">
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also the 
              leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the hotelengine 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passaggeMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;