import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Bomberman</h1>
        <br></br>
          <Link to="/AboutGame">About the Game</Link>
          <br></br>
          <br></br>
          <Link to="/AboutMakers">About the Makers</Link>
          <br></br>
          <br></br>
          <Link to="/Board">THE GAME</Link>
          <br></br>
          <br></br>
      </div>
    );
  }
}


export default App;
