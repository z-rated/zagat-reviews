/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="header scores">
        <h5 className="scoresTitle">THE ZAGAT REVIEW</h5>
        <div className="flex blueFont scoreBorder">

          <div className="rating sideBorder">
            <div className="score food">
              {this.props.currentRestaurant.foodScore}
            </div>
            <span className="category">
              FOOD
            </span>
          </div>

          <div className="rating sideBorder">
            <div className="score service">
              {this.props.currentRestaurant.serviceScore}
            </div>
            <span className="category">
              SERVICE
            </span>
          </div>

          <div className="rating">
            <div className="score decor">
              {this.props.currentRestaurant.decorScore}
            </div>
            <span className="category">
              DECOR
            </span>
          </div>

        </div>
      </div>
    );
  }
}

export default Scores;
