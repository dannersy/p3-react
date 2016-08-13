import React, { Component } from 'react';
import Helpers from './utilities/AuthHelpers';
import { Link } from 'react-router';


class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
    email : " ",
    pw : " ",
    uid : " "
  }

}

takeInputEm(event) {
  let email = this.setState({email : event.target.value})
  console.log(event.target.value)

  return email
}
takeInputPw(event) {
  let pw = this.setState({pw : event.target.value})
  console.log(event.target.value)
  return pw
}

makeUser(event, email, pw) {
  console.log("hi!");
  console.log('emmma', this.state.email);
  Helpers.SignUp(this.state.email,this.state.pw)
}

signUser(event, email, pw) {
  console.log("signing you in");
  console.log('emmma', this.state.email);
  console.log("email : ", this.state.email, "password : ", this.state.pw);
  Helpers.SignIn(this.state.email, this.state.pw)
  .then(res => {
    console.log(res)
  })
  // this.setState({uid : localStorage.getItem(uid)})
  // console.log(this.state.uid)

};




render() {
  return(
    <div>
        <div>
      <h1>SIGN UP</h1>
        <br></br>
        <label>Email?</label>
        <input onChange={(event) => this.takeInputEm(event)} />
        <label>Password?</label>
      <input onChange={(event) => this.takeInputPw(event)} />
      <br></br>
      <button onClick={(event) => this.makeUser(event)}>Let's Make Me!</button>
      </div>
      <div>
        <h1>SIGN IN</h1>
      <button onClick={(event) => this.signUser(event)}><Link to="/SaveSomething">Let's Check Me!</Link></button>
      </div>
    </div>

  )
}



}//closing Components

export default SignUp;
