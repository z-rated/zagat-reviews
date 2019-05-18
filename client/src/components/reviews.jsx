/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="header">
        <p>{this.props.currentRestaurant.review}</p>
      </div>
    )
  }
}

export default Reviews;
