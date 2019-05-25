// /* eslint-disable no-unused-vars */
// /* eslint-disable import/extensions */
import ReactDOM from 'react-dom';

import React from 'react';

import App from './app.jsx';

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'));
}

export default App;
