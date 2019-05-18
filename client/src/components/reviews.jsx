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
      <div className="header reviews blueFont">
        <div>
          <p>{this.props.currentRestaurant.review}</p>
        </div>
      </div>
    )
  }
}

export default Reviews;
