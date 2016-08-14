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
            'http://i.imgur.com/4ZKknW4.png',
          ]}
          staticFallback="http://i.imgur.com/exZsvQU.png"
          style={{ width: 800, height: 700 }}
        />
    </div>
  )
}
}

export default AboutGame;
