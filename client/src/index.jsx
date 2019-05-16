import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <h3>app.js!</h3>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));