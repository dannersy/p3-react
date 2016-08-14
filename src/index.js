import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './Components/App';
import Home from './Components/Home';
import AboutMakers from './Components/AboutMakers';
import AboutGame from './Components/AboutGame';
import Bomberman from './Components/Bomberman';
import HighScores from './Components/HighScores';
import Game from './Components/Game';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import './index.css';

ReactDOM.render (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/bomberman" component={Bomberman} />
      <Route path="/game" component={Game} />
      <Route path="/about_game" component={AboutGame} />
      <Route path="/about_makers" component={AboutMakers} />

      <Route path="/SignUp" component={SignUp} />
      <Route path="/LogIn" component={LogIn} />
      <Route path="/high_scores" component={HighScores} />

    </Route>
  </Router>,
  document.getElementById('root')

)
