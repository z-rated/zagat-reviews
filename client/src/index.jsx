import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';
import Header from './components/header.jsx'

class Index extends React.Component {
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
      success: result => {
        var newRestaurant = result[0]
        this.setState({
          currentRestaurant: newRestaurant,
        })
      }, 
      error: error => {
        console.log(error);
      }
    })
  }

  render() {
    return(
      <div>
        <Header currentRestaurant={this.state.currentRestaurant}/>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));

export default Index;
