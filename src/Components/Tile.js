import React, { Component } from 'react';
import './Tile.css';
import help from '../utils/helpers.js'
import keyDown from '../utils/keyDown.js'
import Element from '../utils/Element.js'
import ReactDOM from 'react-dom'

class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
      man: "",
      bomb: "",
      crate: "",
      fire: "",
      wall: "",
      woman: "",
      potentialCoords: {x: 1, y: 3},
      preCoords: {},
      postCoords: {},
      keyCode: ""
    }
  }

  setUp() {
    // this.setState({
    //   potentialCoords: {x: 1, y: 3}
    // })
    // if (this.props.coords.x%2 === 0 && this.props.coords.y%2 === 0){
    //   this.setState({wall: true})
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    let height = ReactDOM.findDOMNode(this)
    console.log(prevProps, prevState);
    console.log(height);
  }

  componentDidMount = () => {
    // this.setUp()
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown = (e) => {
    e.preventDefault()
    const potentialCoords = this.state.potentialCoords
    // const preCoords = this.state.preCoords
    const postCoords = this.state.postCoords

    if (potentialCoords) {
      const intentCoords = keyDown(e, potentialCoords)
      if (intentCoords) {
        this.possibleMove(intentCoords)
      }
    } else if (postCoords) {
      const intentCoords = keyDown(e, potentialCoords)
      if (intentCoords) {
        this.possibleMove(intentCoords)
      }
    }
  }

  possibleMove = (intentCoords) => {
    const preCoords = this.state.preCoords;
    const postCoords = this.state.postCoords;
    const keyCode = this.state.keyCode;
    const tileCoords = this.props.coords;
    if (intentCoords) {
      if ((intentCoords.x === tileCoords.x) && (intentCoords.y === tileCoords.y)) {
        console.log("heh");
        this.setState({
          postCoords: tileCoords
        })
        console.log("set");
        // this.props.func(tileCoords)

        // return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
      } else {
        return
      }
    }


    // const potentialCoords = this.state.potentialCoords;
    // const tilePos = this.props.coords;
    // if ((this.state.crate === false) && (this.state.wall === false) && (tilePos.x === this.props.prePos.x) && (tilePos.y === this.props.prePos.y) ){
    //   console.log(this.props.prePos.x);
    //   console.log("tilePos: ",tilePos)
    //   return this.props.canMove("yes", this.props.coords);
    // }
    // return false
  }


  grabStore() {
    // const fromHelp = help.getFromHelper()
    // console.log(fromHelp);
  }

  element() {
    const postCoords = this.state.postCoords
    const preCoords = this.state.preCoords
    const potentialCoords = this.state.potentialCoords
    const tileCoords = this.props.coords
    if (this.props.wall) {
      return <div className="wall"><img role='presentation' className='icon' src="https://cdn0.iconfinder.com/data/icons/city-space-1/512/brick_wall-512.png"></img></div>
    } else if (tileCoords.x === postCoords.x && tileCoords.y === postCoords.y) {
      return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
    } else if (tileCoords.x === potentialCoords.x && tileCoords.y === potentialCoords.y) {
      return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
    } else if (preCoords) {
      return
    }
  }

  render(){
    // const elements = this.state
    return(
      <div className="tile">
        {this.element()}
      </div>
    )
  }
}

export default Tile;
