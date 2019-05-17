import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jQuery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log('Sending /GET!');
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/reviews',
      success: result => {
        console.log(result);
      }, 
      error: error => {
        console.log(error);
      }
    })
  }

  render() {
    return(
      <h3>Zagat's reviews!</h3>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));