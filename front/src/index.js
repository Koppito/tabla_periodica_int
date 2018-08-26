import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/Home';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
