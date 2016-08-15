import React, {Component} from 'react';
import './Game.css';
import NavLink from './NavLink'

class Bomberman extends Component {
  render() {
    return (
      <div>
        <div className="bigContainer">
          <NavLink className="links" to="/SignUp" onlyActiveOnIndex>Sign Up</NavLink>
          <NavLink className="links" to="/LogIn" onlyActiveOnIndex>Log In</NavLink>
          <NavLink className="links" to='/high_scores' onlyActiveOnIndex>HighScores</NavLink>
          <NavLink className="links" to="/game" onlyActiveOnIndex>Play the game</NavLink>
        </div>
        {this.props.children}
      </div>
    )
  };
}

export default Bomberman;
