import React, { Component } from 'react';
import helpers from '../utilities/AuthHelpers';
import NavLink from './NavLink';
import { Link } from 'react-router';
import './App.css';


class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
          firstName: " ",
          lastName: " ",
          email: " ",
          userName: " ",
          pw: " "
      }
  }


makeUser(event, email, pw, obj) {
    console.log("hi!");
    helpers.signUp(this.state.email, this.state.pw, this.state);
    console.log("email : ", this.state.email, "password : ", this.state.pw);
}





render() {
  return(
    <div>

      <h1>SIGN UP</h1>
        <ol>
          <li> First Name: <input onChange={(event) => this.setState({firstName: event.target.value})} /></li>
          <li> Last Name: <input onChange={(event) => this.setState({lastName: event.target.value})} /></li>
          <li> Email: <input onChange={(event) => this.setState({email: event.target.value})} /></li>
          <li> Username: <input onChange={(event) => this.setState({username: event.target.value})} /></li>
          <li> Password: <input onChange={(event) => this.setState({pw: event.target.value})} /></li>
        </ol>
        <button onClick={(event) => this.makeUser(event)}><Link to="/LogIn">Make Me!</Link></button>
      <h1>OR</h1>
        <h1><Link to="/LogIn">SIGN IN</Link></h1>

    </div>

  )
}



}//closing Components

export default SignUp;
