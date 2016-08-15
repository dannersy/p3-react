import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class AboutMakers extends Component {
  render() {
    return (
      <div className="AboutMakers">
        <div>
          <h2>Isaac</h2>
          <img alt="" src="http://i.imgur.com/NEXrR4M.png" />
          <br></br>
          <a href="https://www.linkedin.com/in/isaackang">linkedin</a>
          <br></br>
          <br></br>
          <a href="https://github.com/kangarang">Git</a>
        </div>
        <div>
          <h2>Daniel</h2>
          <img alt="" src="http://i.imgur.com/q23PkKQ.png" />
          <br></br>
          <a href="https://www.linkedin.com/in/danielyochumjr">linkedin</a>
          <br></br>
          <br></br>
          <a href="https://github.com/dannersy">Git</a>
        </div>
        <div>
          <h2>Shreiya</h2>
          <img alt="" src="http://i.imgur.com/4f5nmF3.png"></img>
          <br></br>
          <a href="https://www.linkedin.com/in/shreiya">linkedin</a>
          <br></br>
          <br></br>
          <a href="https://github.com/Shreiya">Git</a>
        </div>
      </div>
    )
  }
}

export default AboutMakers;
