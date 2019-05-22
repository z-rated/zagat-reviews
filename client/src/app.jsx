/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import $ from 'jquery';
import Header from './components/header.jsx';
import Graph from './components/graph.jsx';
import Scores from './components/scores.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurant: {
        name: '',
        description: '',
        type: '',
        location: '',
        price: '',
        review: '',
        foodScore: '',
        decorScore: '',
        serviceScore: '',
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
        const quotedReview = this.addBoldedQuotes(newRestaurant.review);
        console.log(result);
        newRestaurant.review = quotedReview;
        this.setState({
          currentRestaurant: newRestaurant,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  addBoldedQuotes(review) {
    const splitReview = review.split(' ');
    let phrase = [];
    let rejoinedPhrase = [];
    let randomLength = Math.round(Math.random() * 3) + 2;
    const rejoinedReview = [];
    let wordCount = 0;
    let stringReview = '';
    let i = 0;
    let k = 0;
    let justQuoted = false;

    while (wordCount < splitReview.length) {
      for (i; i < k + randomLength; i += 1) {
        if (splitReview[i] !== undefined) {
          if (i !== k + randomLength - 1) {
            phrase.push(`${splitReview[i]} `);
            wordCount += 1;
          } else {
            phrase.push(splitReview[i]);
            wordCount += 1;
          }
        }
      }

      if (justQuoted === false) {
        if (Math.random() > 0.5) {
          phrase.unshift(' "');
          phrase[phrase.length - 1] += '" ';
          justQuoted = true;
        } else {
          phrase[phrase.length - 1] += ' ';
        }
      } else {
        justQuoted = false;
        phrase[phrase.length - 1] += ' ';
      }

      rejoinedPhrase = phrase.join('');

      if (justQuoted === true) {
        $('#text').append(`<span class='bolded'><strong class='bolded'>${rejoinedPhrase}</strong></span>`);
      } else {
        $('#text').append(`<span>${rejoinedPhrase}</span>`);
      }

      rejoinedReview.push(rejoinedPhrase);

      phrase = [];
      rejoinedPhrase = [];
      randomLength = Math.round(Math.random() * 3) + 2;
      k = i;
    }

    stringReview = rejoinedReview.join('');
    return stringReview;
  }

  render() {
    return (
      <div className="container vw" id="myapp">
        <Header currentRestaurant={this.state.currentRestaurant} className="headerz" />
        <Graph currentRestaurant={this.state.currentRestaurant} className="graphz" />
        <Scores currentRestaurant={this.state.currentRestaurant} className="scorez" />
      </div>
    );
  }
}

export default App;
