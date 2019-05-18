/* eslint-disable import/extensions */
import React from 'react';
import $ from 'jQuery';
import Header from './components/header.jsx';
import Graph from './components/graph.jsx';
import Scores from './components/scores.jsx';
import Reviews from './components/reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurant: {

      },
    };
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/restaurants/1/reviews',
      success: (result) => {
        const randomIndex = Math.round(Math.random() * 100);
        const newRestaurant = result[randomIndex];
        this.setState({
          currentRestaurant: newRestaurant,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  render() {
    return (
      <div className="container">
        <Header currentRestaurant={this.state.currentRestaurant} />
        <Graph currentRestaurant={this.state.currentRestaurant} />
        <Scores currentRestaurant={this.state.currentRestaurant} />
        <Reviews currentRestaurant={this.state.currentRestaurant} />
      </div>
    );
  }
}

export default App;
