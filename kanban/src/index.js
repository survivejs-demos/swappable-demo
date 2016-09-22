import React from 'react';
import ReactDOM from 'react-dom';
import Env from './components/Env';
import App from './components/App';
import init from './state/init';
import './main.css';

init();

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Env><App /></Env>,
  document.getElementById('root')
);
