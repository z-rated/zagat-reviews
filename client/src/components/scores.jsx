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
      <div className="header">

        <h5 className="reviewsTitle">THE ZAGAT REVIEW</h5>

        <div className="flex">
          <div>
            <div className="score">
              {this.props.currentRestaurant.foodScore}
            </div>
            <span>
              FOOD
            </span>
          </div>

          <div>
            <div className="score">
              {this.props.currentRestaurant.serviceScore}
            </div>
            <span>
              SERVICE
            </span>
          </div>

          <div>
            <div className="score">
              {this.props.currentRestaurant.decorScore}
            </div>
            <span>
              DECOR
            </span>
          </div>

        </div>

      </div>
    );
  }
}

export default Scores;
