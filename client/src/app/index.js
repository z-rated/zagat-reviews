import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <h3>index.js from the app folder!</h3>
    )
  }
}

ReactDOM.render(< App/>, document.getElementById('app'));