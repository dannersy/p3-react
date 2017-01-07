import React, { Component } from 'react';
import '../Styles/App.css';

class AboutMakers extends Component {
    render() {
        return (
          <div className="about-wrapper">
            <div className="AboutMakers">
                <div className="third">
                    <h2>Isaac</h2>
                    <img alt="" src="http://i.imgur.com/NEXrR4M.png" />
                    <a href="https://www.linkedin.com/in/isaackang">LinkedIn</a>
                    <br></br>
                    <a href="https://github.com/kangarang">GitHub</a>
                </div>
                <div className="third">
                    <h2>Daniel</h2>
                    <img alt="" src="http://i.imgur.com/q23PkKQ.png" />
                    <a href="https://www.linkedin.com/in/danielyochumjr">LinkedIn</a>
                    <br></br>
                    <a href="https://github.com/dannersy">GitHub</a>
                </div>
                <div className="third">
                    <h2>Shreiya</h2>
                    <img alt="" src="http://i.imgur.com/4f5nmF3.png"></img>
                    <a href="https://www.linkedin.com/in/shreiya">LinkedIn</a>
                    <br></br>
                    <a href="https://github.com/Shreiya">GitHub</a>
                </div>
            </div>
          </div>
        )
    }
}

export default AboutMakers;
