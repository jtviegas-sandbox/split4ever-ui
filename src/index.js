import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './components/app';
import properties from './properties';

const app = new App(properties);

console.log('[index]');
ReactDOM.render(<app />, document.getElementById('root'));
