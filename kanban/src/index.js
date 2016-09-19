import React from 'react';
import ReactDOM from 'react-dom';
import chromeDebug from 'alt-utils/lib/chromeDebug';
import App from './components/App';
import Provider from './components/Provider';
import './main.css';
import alt from './libs/alt';
import init from './init';

init(alt);

if(process.env.NODE_ENV !== 'production') {
  chromeDebug(alt);

  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Provider><App /></Provider>,
  document.getElementById('root')
);
