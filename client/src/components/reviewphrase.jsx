/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from '../../dist/styles/reviewphrasestyles.css';
import PropTypes from 'prop-types';

class Reviewphrase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.phrase.bold === true) {
      return (
        <span className={styles.boldreviews}>{this.props.phrase.text}</span>
      );
    } else {
      return (
        <span className={styles.notboldreviews}>{this.props.phrase.text}</span>
      );
    }
  }
}

Reviewphrase.propTypes = {
  phrase: PropTypes.object.isRequired,
};

export default Reviewphrase;
