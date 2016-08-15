import React, { Component } from 'react';

import helpers from '../utils/AuthHelpers';
import NavLink from './NavLink';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      pw : "",
      displayName: window.localStorage.getItem("displayName"),
      userId: window.localStorage.getItem("uid")

    }
  }

  signIn(event){
    event.preventDefault();
    helpers.logIn(this.state.email,this.state.pw)
  }



  render() {
console.log("displayName", this.state.displayName);
console.log("userID", this.state.userid);
let userId = this.state.userid;
    return (
    <div className="SignInBox">
      <h1>Let's Log In!</h1>
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
        </div>
        <div className="form-group">
          <label className="sr-only">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(event) => this.setState({pw: event.target.value})} />
        </div>
        <button type="submit" className="btn btn-default" onClick={(event) => this.signIn(event)}><NavLink to="/game">Let's do this!</NavLink></button>
      </form>
    </div>
    )
  }
}

export default LogIn;
