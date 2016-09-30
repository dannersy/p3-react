import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../Styles/Game.css'
// import Game from './Game';

class Instructions extends Component {
  handleClick(e){
    e.preventDefault();
    browserHistory.push('/game')
  }
  render(){
    return (
      <div className="instructions">
        <h1>Player One:</h1>
        <p>'W', 'A', 'S', & 'D' moves your robot, 'E' drops a bomb.</p>
        <h1>Player Two:</h1>
        <p>'UP', 'DOWN', 'LEFT', & 'RIGHT' ARROWS move your robot and 'SPACE'
          drops a bomb</p>
        <button onClick={(e) => this.handleClick(e)}>Play!</button>
      </div>
    )
  }
}

export default Instructions;
