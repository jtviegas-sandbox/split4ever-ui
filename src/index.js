import React from 'react';
import ReactDOM from 'react-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';

import App from './components/App';

import configuration from './configuration';

ReactDOM.render(<App configuration={configuration} />, document.getElementById('root'));


