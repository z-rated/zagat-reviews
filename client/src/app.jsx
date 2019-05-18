import React from 'react';
import $ from 'jQuery';
import Header from './components/header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurant: {

      }
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/restaurants/1/reviews',
      success: (result) => {
        const newRestaurant = result[0];
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
    return(
      <div class="container">
        <Header currentRestaurant={this.state.currentRestaurant}/>
      </div>
    )
  }
};

export default App;
