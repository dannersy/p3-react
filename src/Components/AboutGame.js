import React, { Component } from 'react';
import '../Styles/AboutGame.css';
import AtvImg from 'react-atv-img';

class AboutGame extends Component {

    render() {
        return (
          <div>
            <div className="aboutGame">
                <div className="about-header"><h5>Welcome to our game. Please click the above links to navigate about the site!</h5></div>
                <div className="atvContainer">
                  <AtvImg
                      layers={[
                          'http://i.imgur.com/ZBxEnh2.png',
                          'http://i.imgur.com/76TpRZY.png',
                      ]}
                      staticFallback="http://i.imgur.com/5ndOzQw.png"
                      className={"atv"}
                  />
                </div>
            </div>
          </div>
        )
    }

}

export default AboutGame;
