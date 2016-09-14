import '../Styles/Game.css'
import React from 'react';

export default (props) => {
  return (
    <div className="grass">
      <img role="presentation" src="http://i.imgur.com/iYG7YXh.png" />
      <img role="presentation" className="robotIcon" src={require("../assets/robotOne.png")} />
    </div>
  )
}
