import React, { Component } from 'react';
import NavLink from './NavLink';
import './AboutGame.css';
import AtvImg from 'react-atv-img';

class AboutGame extends Component {
  render(){
    return (
      <div className="rootDivStyle">
        <AtvImg

          layers={[
            'http://i.imgur.com/ZBxEnh2.png',
            'http://i.imgur.com/76TpRZY.png',
          ]}
          staticFallback="http://i.imgur.com/5ndOzQw.png"
          style={{ width: 570, height: 550 }}
        />

    </div>
  )
}



  }



export default AboutGame;
