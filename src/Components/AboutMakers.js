import React, { Component } from 'react';
import NavLink from './NavLink';
import './App.css';
import { Link } from 'react-router';

class AboutMakers extends Component {
  render() {
    return (
      <div className="AboutMakers">
        <h1>The Makers</h1>
        <div>
          <h2>Isaac</h2>
          <img alt="" src="http://i.imgur.com/2ktBepM.jpg" />
          <br></br>
          <a href="https://www.linkedin.com/in/isaackang">linkedin</a>
          <br></br>
          <br></br>
          <a href="https://github.com/kangarang">Git</a>
        </div>
        <div>
          <h2>Daniel</h2>
          <img alt="" src="http://i.imgur.com/Cx4TVEe.jpg" />
          <br></br>
          <a href="https://www.linkedin.com/in/danielyochumjr">linkedin</a>
          <br></br>
          <br></br>
          <a href="https://github.com/dannersy">Git</a>
        </div>
        <div>
          <h2>Shreiya</h2>
          <img alt="" src="http://i.imgur.com/k12O9tG.png?1"></img>
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
