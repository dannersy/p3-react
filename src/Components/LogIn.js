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
      <h1>Let's Log In!</h1>
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

          <form className="form-inline">
  <div className="form-group">
    <label className="sr-only" for="exampleInputEmail3">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
  </div>
  <div className="form-group">
    <label className="sr-only" for="exampleInputPassword3">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password" onChange={(event) => this.setState({pw: event.target.value})} />
  </div>
  <button type="submit" className="btn btn-default" onClick={(event) => this.makeUser(event)}><Link to="/LogIn">Sign up</Link></button>
</form>
    </div>
    )
  }
}

export default LogIn;
