import React from 'react';
import ReactDOM from 'react-dom';
import a11y from 'react-a11y';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

if (process.env.NODE_ENV === 'development') {
    a11y(React, { ReactDOM })
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
