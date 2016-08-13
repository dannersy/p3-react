import React, { Component } from 'react';
import helpers from '../utilities/AuthHelpers';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : " ",
      pw : " ",
      userid : " "
    }
  }

  signIn(event) {
    helpes.signIn(this.state.email,this.state.pw).then((res)=>{
    this.setState({
      userid: res.uid
    })
  })
}


  render() {
    return (
    <div>
      <br></br>
        <label>Email ?</label>
          <input onChange={(event) => this.setState({email: event.target.value})} />
          <br></br>
          <br></br>
        <label>Password ?</label>
          <input onChange={(event) => this.setState({pw: event.target.value})} />
        <br></br>
        <button onClick={(event) => this.signIn(event)}>Let's do this!</button>
    </div>
    )
  }
}

export default LogIn;
