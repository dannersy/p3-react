import React, { Component } from 'react';
import Helpers from './utilities/NormalHelpers';

class SaveSomething extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "",
      age : ""
    }
  }


  submitInfoName(event) {
    this.setState({name : event.target.value});
    console.log(event.target.value)
  }

  submitInfoAge(event) {
    this.setState({age : event.target.value});
    console.log(event.target.value)
  }

  saveStuff(event) {
    event.preventDefault();
    console.log("starting to save");
    //contact Helpers to save stuff to firebase using the id
    Helpers.saveStuff(this.state.name)
    .then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
      <label>Name</label>
      <input onChange={(event) => this.submitInfoName(event)} />
      <br></br>
      <label>Age</label>
      <input onChange={(event) => this.submitInfoAge(event)} />
      <br></br>
      <button onClick={(event) => this.saveStuff(event)}>Let's save this!</button>
      </div>

    )
  }

}

export default SaveSomething;
