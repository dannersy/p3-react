import React, { Component } from 'react';
import NavLink from './NavLink';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
import help from '../utils/helpers.js'
import helpers from '../utils/AuthHelpers';

class GameOver extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const savedObj = help.grabObj()
    const initials = this.state.text
    if (savedObj) {
      savedObj.initials = initials
      const test = help.save(savedObj)
      console.log(test);
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="GameOver">
        <h1>GAME OVER</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleChange(event)} type="text" placeholder="input your initials" maxLength="3"></input>
          <button>{"Submit to High Scores"}</button>
        </form>
      </div>
    );
  }
}

export default GameOver;
