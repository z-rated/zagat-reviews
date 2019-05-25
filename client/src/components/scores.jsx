/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import styles from '../../dist/styles/scoresstyles.css';
import PropTypes from 'prop-types';

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.scores}>
        <h5 className={styles.scoresTitle}>THE ZAGAT REVIEW</h5>
        <div className={styles.scoreBoard}>

          <div className={styles.side}>
            <div className={styles.food}>
              {this.props.currentRestaurant.foodScore}
            </div>
            <span className={styles.category}>
              FOOD
            </span>
          </div>

          <div className={styles.side}>
            <div className={styles.decor}>
              {this.props.currentRestaurant.decorScore}
            </div>
            <span className={styles.category}>
              DECOR
            </span>
          </div>

          <div className={styles.noside}>
            <div className={styles.service}>
              {this.props.currentRestaurant.serviceScore}
            </div>
            <span className={styles.category}>
              SERVICE
            </span>
          </div>

        </div>
      </div>
    );
  }
}

Scores.propTypes = {
  currentRestaurant: PropTypes.object.isRequired,
};

export default Scores;
