/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styles from '../../dist/styles/headerstyles.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.header}>
        <h2 className={styles.name}>{this.props.currentRestaurant.name}</h2>
        <h4 className={styles.description}>{this.props.currentRestaurant.description}</h4>
        <div>
          <span>
            <a href="#" className={styles.headerlink}>{this.props.currentRestaurant.type}</a>
            <span className={styles.dot}>·</span>
          </span>
          <span>
            <a href="#" className={styles.headerlink}>{this.props.currentRestaurant.location}</a>
            <span className={styles.dot}>·</span>
          </span>
          <a href="#" className={styles.headerlink}>{this.props.currentRestaurant.price}</a>
        </div>
      </div>
    );
  }
}

export default Header;
