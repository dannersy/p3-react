import React, { Component } from 'react';
import Helpers from './utilities/FirebaseHelper';
console.log({Helpers});

class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
    pw : "",
    email: ""
  }
}

takeInputPw() {
  this.setState({pw : event.target.value})
}

takeInputEm() {
  this.setState({email : event.target.value})
}

makeUser(event, email, password) {
  console.log("hi!");
}




render() {
  return(
    <div>
      <h1>SIGN UP</h1>
      <input onSubmit={(event) => this.takeInputPw(event)} placeholder="password" />
      <br></br>
      <input onSubmit={(event) => this.takeInputEm(event)} placeholder="email" />
      <br></br>
      <button onClick={(event) => this.makeUser(event)}>Let's Make Me!</button>
    </div>

  )
}



}//closing Components
