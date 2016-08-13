import React, {Component} from 'react';
import update from 'react-addons-update'
import createTiles from './utils/CreateTiles.js';
import TileContainer from './TileContainer.js';
import movement from './utils/Movement.js';
import { Link } from 'react-router';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: []
    }
  };

  bomb(bombIndex){
    const App = this
    window.setTimeout(function(){
      App.explosion(bombIndex)},3000)
  };

  explosion(bombIndex){
    const tiles = this.state.tiles;
    const bombCoords = tiles[bombIndex];
    const obj = bombCoords

    const showMe = fourWay(obj)

    console.log(bombIndex);

    function fourWay(bCoords) {
      const exCoords = []
      // right 1, right 2
      exCoords.push([{x: bCoords.x + 1, y: bCoords.y},{x: bCoords.x + 2, y: bCoords.y}])
      // left 1, left 2
      exCoords.push([{x: bCoords.x - 1, y: bCoords.y},{x: bCoords.x - 2, y: bCoords.y}])
      // up 1, up 2
      exCoords.push([{x: bCoords.x, y: bCoords.y + 1},{x: bCoords.x, y: bCoords.y + 2}])
      // down 1, down 2
      exCoords.push([{x: bCoords.x, y: bCoords.y - 1},{x: bCoords.x, y: bCoords.y - 2}])
      return exCoords
    }

    console.log(showMe);
    this.setState({
      tiles: update(this.state.tiles, {[bombIndex]: {
        bomb: {$set: false},
        playerOne: {$set: false}
      }})
    })

    for (let i = 0; i < showMe.length; i++) {
      let checkExp = showMe[i]
      let willExplode = tiles.filter(tile => tile.x === checkExp[0].x && tile.y === checkExp[0].y && tile.cement === false)

      let willExplodeTwo = tiles.filter(tile => tile.x === checkExp[1].x && tile.y === checkExp[1].y && tile.cement === false)

      if (willExplode.length) {
        const toExplode = tiles.indexOf(willExplode[0])
        const twoExplode = tiles.indexOf(willExplodeTwo[0])

        this.setState({
          tiles: update(this.state.tiles, {[toExplode]: {
            bomb: {$set: false},
            playerOne: {$set: false},
            crate: {$set: false}
          }})
        })

        this.setState({
          tiles: update(this.state.tiles, {[twoExplode]: {
            bomb: {$set: false},
            playerOne: {$set: false}
          }})
        })


      } else {
          return
      }


      for (var j = 0; j < showMe[i].length; j++) {
        const show = tiles.filter( (oneObj, index) => {
          // showMe[i][j] === oneObj
        })
        console.log("show", show);
        // console.log(tiles.indexOf(showMe[i][j]));
        // if ( showMe[i][j].wall === false ) {
        //   console.log("not a wall");
        //   explodeMe(bombIndex)
        //
        //   // this.setState({
        //   //   tiles:update(this.state.tiles, {showMe[i][j]})
        //   // })
        // } else {
        //   return
        // }
      }
    }
  };

  handleKeyDown(event){
    let position = this.state.tiles.filter(tile => tile.playerOne === true);
    let newPosition = movement(event, position[0]);
    let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false)
    if (atPosition.length){
      const old = this.state.tiles.indexOf(position[0]);
      const newer = this.state.tiles.indexOf(atPosition[0]);
      this.setState({
        tiles: update(this.state.tiles, {[old]: {playerOne: {$set: false}}})
      })
      this.setState({
        tiles: update(this.state.tiles, {[newer]: {playerOne: {$set: true}}})
      })
    } else if (newPosition === "bomb") {
      console.log("plant bomb");
      const i = this.state.tiles.indexOf(position[0]);
      this.setState({
        tiles: update(this.state.tiles, {[i]: {bomb: {$set: true}}})
      })
      if (this.state.tiles[i].bomb === true) {
          return this.bomb(i);
        };

    } else return
  };

  componentDidMount(){
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
    this.setState({tiles: createTiles()});
  }; //Adds event listener and setsState of gameboard

  render(){
    return(
      <div>
      <button><Link to="/">Let's go home!</Link></button>
      <TileContainer tiles={this.state.tiles} />
      </div>
    )
  }; //Container worried about one state that changes based on user input.
}

export default Board;
