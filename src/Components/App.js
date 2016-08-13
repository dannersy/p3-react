import React, { Component } from 'react';
import NavLink from './NavLink';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>BOMBERMAN APP COMPONENT</h2>
        <NavLink to='/' onlyActiveOnIndex>Home</NavLink>
        <br></br>
        <br></br>
        <NavLink to='/about_game' onlyActiveOnIndex>About The Game</NavLink>
        <br></br>
        <br></br>
        <NavLink to='/about_makers' onlyActiveOnIndex>About The Makers</NavLink>
        <br></br>
        <br></br>
        <NavLink to='/game' onlyActiveOnIndex>BOMBERMAN</NavLink>
        <br></br>
        <br></br>
        <NavLink to="/SignUp" onlyActiveOnIndex>SIGN UP</NavLink>
        {this.props.children}
      </div>
    )
  }
}

export default App;
