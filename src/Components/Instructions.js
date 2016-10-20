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
      <div className="instructionsCont">
        <div className="instructions">
          <div>
            <h1>Player One:</h1>
            <p>You are the robot on the top-left.</p>
            <p>'W', 'A', 'S' & 'D' moves your robot, 'E' drops a bomb.</p>
          </div>
          <div>
            <h1>Player Two:</h1>
            <p>You are the robot on the bottom-right.</p>
            <p>'UP', 'DOWN', 'LEFT' & 'RIGHT' ARROWS move your robot and 'SPACE'
              drops a bomb</p>
          </div>
          <button className='playButton' onClick={(e) => this.handleClick(e)}>Play!</button>
        </div>
      </div>
    )
  }
}

export default Instructions;
