/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-self-assign */
/* eslint-disable prefer-template */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable block-scoped-var */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
/* eslint-disable no-floating-decimal */
/* eslint-disable no-empty */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-debugger */
/* eslint-disable space-before-function-paren */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import React from 'react';
import $ from 'jQuery';
import Header from './components/header.jsx';
import Graph from './components/graph.jsx';
import Scores from './components/scores.jsx';

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
        const quotedReview = this.addBoldedQuotes(newRestaurant.review);
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

  addBoldedQuotes (review) {
    var splitReview = review.split(' ');
    var phrase = [];
    var rejoinedPhrase = [];
    var randomLength = Math.round(Math.random() * 3) + 2;
    var rejoinedReview = [];
    var wordCount = 0;
    var stringReview = '';
    var i = 0;
    var k = 0;
    var justQuoted = false;

    while (wordCount < splitReview.length) {

      for (i = i; i < k + randomLength; i += 1) {
        if (splitReview[i] !== undefined) {
          if (i !== k + randomLength - 1) {
            phrase.push(splitReview[i] + ' ');
            wordCount += 1;
          } else {
            phrase.push(splitReview[i]);
            wordCount += 1;
          }
        }
      }

      if (justQuoted === false) {
        if (Math.random() > .5) {
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
      <div className="container">
        <Header currentRestaurant={this.state.currentRestaurant} />
        <Graph currentRestaurant={this.state.currentRestaurant} />
        <Scores currentRestaurant={this.state.currentRestaurant} />
      </div>
    );
  }
}

export default App;
