import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import BrowserUnsupported from './components/BrowserUnsupported/BrowserUnsupported';
import DailyIframe from '@daily-co/daily-js';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import './assets/scss/style.scss';

/*ReactDOM.render(
  DailyIframe.supportedBrowser().supported ? <App /> : <BrowserUnsupported />,
  document.getElementById('root')
);*/
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

