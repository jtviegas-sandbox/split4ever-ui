import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './components/app';
import configuration from './configuration';


ReactDOM.render(<App configuration={configuration} />, document.getElementById('root'));
