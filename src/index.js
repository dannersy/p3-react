import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import StartGame from './StartGame';
import SaveSomething from './SaveSomething';
import AboutMakers from './AboutMakers';
import AboutGame from './AboutGame';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='/StartGame' component={StartGame} />
    <Route path='/SaveSomething' component={SaveSomething} />
    <Route path="/AboutMakers" component={AboutMakers} />
    <Route path="/AboutGame" component={AboutGame} />
    </Router>

,document.getElementById('root')
);
