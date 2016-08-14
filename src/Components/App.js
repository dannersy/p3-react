import React, { Component } from 'react';
import NavLink from './NavLink';
// import { Nav, NavItem, MenuItem, NavDropDown, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>BOMBERMAN, FUCK YEAH</h2>
        <NavLink className="links" to='/' onlyActiveOnIndex>Home</NavLink>{" "}{" "}
        <NavLink className="links" to='/about_game' onlyActiveOnIndex>About The Game</NavLink>{" "}{" "}
        <NavLink className="links" to='/about_makers' onlyActiveOnIndex>About The Makers</NavLink>{" "}{" "}
        <NavLink className="links" to='/bomberman' onlyActiveOnIndex>BOMBERMAN</NavLink>{" "}{" "}
        {this.props.children}
      </div>
    )
  }
}

export default App;
