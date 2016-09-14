import '../Styles/Game.css'
import React from 'react';

export default (props) => {
  return (
  <div className="grass">
    <img role="presentation" className="bombPlayer" src="http://i.imgur.com/iYG7YXh.png"></img>
    <img role="presentation" className="robotIcon" src={require("../assets/robotTwo.png")} />
  </div>
  )
}
