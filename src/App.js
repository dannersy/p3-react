import React, { Component } from 'react';
import SignUp from './SignUp';

console.log({SignUp});
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hi Boo</h1>
          <SignUp />
      </div>
    );
  }
}

export default App;
