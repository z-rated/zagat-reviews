/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="header">
        <h2 className="blueFont header name">{this.props.currentRestaurant.name}</h2>
        <h4 className="description">{this.props.currentRestaurant.description}</h4>
        <div>
          <span>
            <a href="#" className="headerLink">{this.props.currentRestaurant.type}</a>
            <span className="dot">·</span>
          </span>
          <span>
            <a href="#" className="headerLink">{this.props.currentRestaurant.location}</a>
            <span className="dot">·</span>
          </span>
          <a href="#" className="headerLink">{this.props.currentRestaurant.price}</a>
        </div>
      </div>
    )
  }
}

export default Header;