import React, { Component } from 'react';
import helpers from '../utilities/AuthHelpers';
import { Link } from 'react-router';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : " ",
      pw : " "
    }
  }

  signIn(event) {
    helpers.signIn(this.state.email,this.state.pw);
    console.log("you're in!")
}


  render() {
    return (
    <div>
      <br></br>
      Let's Log In!
      <br></br>
      <br></br>
        <label>Email ?</label>
          <input onChange={(event) => this.setState({email: event.target.value})} />
          <br></br>
          <br></br>
        <label>Password ?</label>
          <input onChange={(event) => this.setState({pw: event.target.value})} />
        <br></br>
        <button onClick={(event) => this.signIn(event)}><Link to="/Game">Let's do this!</Link></button>
    </div>
    )
  }
}

export default LogIn;
