import React, { Component } from 'react';
import helpers from './utilities/AuthHelpers';
import { Link } from 'react-router';


class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
          email: " ",
          pw: " ",
          userName: "",
          dob: "",
          firstName: "",
          lastName: "",
          phone: 0
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
          <li> Email: <input onChange={(event) => this.setState({email: event.target.value})} /></li>
          <li> Password: <input onChange={(event) => this.setState({pw: event.target.value})} /></li>
          <li> Username: <input onChange={(event) => this.setState({username: event.target.value})} /></li>
          <li> First Name: <input onChange={(event) => this.setState({firstName: event.target.value})} /></li>
          <li> Last Name: <input onChange={(event) => this.setState({lastName: event.target.value})} /></li>
          <li> Phone Number: <input onChange={(event) => this.setState({phone: event.target.value})} /></li>
        </ol>
        <button onClick={(event) => this.makeUser(event)}>Make Me!</button>
      <h1>OR</h1>
        <h1>SIGN IN</h1>
      <button><Link to="/SaveSomething">Let's Check Me!</Link></button>

    </div>

  )
}



}//closing Components

export default SignUp;
