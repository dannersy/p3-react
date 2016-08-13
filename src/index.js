import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './Components/App';
// import StartGame from './Components/StartGame';
import Home from './Components/Home';
// import SaveSomething from './Components/SaveSomething';
import AboutMakers from './Components/AboutMakers';
import AboutGame from './Components/AboutGame';
import Game from './Components/Game';
import StartGame from './Components/StartGame';
import './index.css';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/about_game" component={AboutGame} />
      <Route path="/about_makers" component={AboutMakers} />
      <Route path="/StartGame" component={StartGame} />
    </Route>
  </Router>,
  document.getElementById('root')

);
