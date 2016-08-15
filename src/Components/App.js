import React, { Component } from 'react';
import NavLink from './NavLink';
import 'react-bootstrap';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h2 className="Header">BOMBERMAN</h2>
          <ul className="nav nav-tabs">
            <li role="presentation" className="active" className="home"><NavLink to='/' onlyActiveOnIndex>Home</NavLink></li>
            <li role="presentation" ><NavLink to='/about_game'>About The Game</NavLink></li>
            <li role="presentation"><NavLink to='/about_makers'>About The Makers</NavLink></li>
            <li role="presentation"><NavLink to="/SignUp">SIGN UP AND PLAY</NavLink></li>
          </ul>

          {this.props.children}
      </div>
      );
    }
  }

export default App;
