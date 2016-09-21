import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './state/Provider';
import init from './state/init';
import './main.css';

init();

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root')
);
