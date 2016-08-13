import React, { Component } from 'react';
import helpers from './utilities/AuthHelpers';
import { Link } from 'react-router';


class SignUp extends Component {
constructor(props) {
  super(props);
  this.state = {
    email : " ",
    pw : " ",
    userid : " "
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
  helpers.signUp(this.state.email,this.state.pw)
}

signUser(event, email, pw) {
  console.log("signing you in");
  console.log('emmma', this.state.email);
  console.log("email : ", this.state.email, "password : ", this.state.pw);
  helpers.signIn(this.state.email, this.state.pw).then((res)=>{
    this.setState({
      userid: res.uid
    })
    console.log(this.state.userid);
  })
}





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
      <h1>OR</h1>
      <div>
        <h1>SIGN IN</h1>
      <button onClick={(event) => this.signUser(event)}><Link to="/SaveSomething">Let's Check Me!</Link></button>
      </div>
    </div>

  )
}



}//closing Components

export default SignUp;
