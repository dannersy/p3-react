import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './Components/App';
import AboutMakers from './Components/AboutMakers';
import AboutGame from './Components/AboutGame';
// import HighScores from './Components/HighScores';
// import LogIn from './Components/LogIn';
// import SignUp from './Components/SignUp';
import Game from './Components/Game';
import Instructions from './Components/Instructions'
import GameOver from './Components/GameOver';
import './Styles/index.css';

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={AboutGame} />
            <Route path="/about_makers" component={AboutMakers} />
            <Route path="/instructions" component={Instructions} />
            <Route path='/game' component={Game} />
            <Route path="/game-over/:winner" component={GameOver} />
        </Route>
    </Router>,
    document.getElementById('root')
)
