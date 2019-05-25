import React from 'react';
import styles from '../../dist/styles/reviewstyles.css';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.reviews} id="body" />
      </div>
    );
  }
}

export default Reviews;
