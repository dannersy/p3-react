import React, {Component} from 'react';
import './Game.css';
import NavLink from './NavLink'

class Bomberman extends Component {
  render() {
    return (
      <div className="bigContainer">
        <NavLink className="links" to="/game" onlyActiveOnIndex>Play the game</NavLink>
        <NavLink className="links" to="/log-in" onlyActiveOnIndex>Play the game</NavLink>
        <NavLink className="links" to="/sign-up" onlyActiveOnIndex>Play the game</NavLink>
        <NavLink className="links" to='/high_scores' onlyActiveOnIndex>HighScores</NavLink>
      </div>
    )
  };
}

export default Bomberman;
