import React, {Component} from 'react';
import update from 'react-addons-update'
import createTiles from '../utils/CreateTiles.js';
import TileContainer from './TileContainer.js';
import movement from '../utils/Movement.js';
import helpers from '../utilities/NormalHelpers';
import { Link } from 'react-router';
import './Game.css';


class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [],
      userId: window.localStorage.uid,
      text : "shreiya"
    }
  };

  fireTimer(){
    const App = this;
    window.setInterval(function(){
      console.log("timer");
      App.eachFire();
    },500)
  }; //Check for fire

  eachFire(){
    const App = this;
    const fireTiles = this.state.tiles.filter(tile => tile.fire === true);
    fireTiles.map(function(tile, t){
      return App.clearFire(tile);
    })
  }; //For each fire run clearFire with current tile info

  clearFire(tile){
    const tiles = this.state.tiles;
    const atTile = tiles.indexOf(tile);
    this.setState({
      tiles: update(this.state.tiles, {[atTile]: {
        fire: {$set: false},
        playerOne: {$set: false}
      }})
    });
  }; //Clear fire, destroy player if inside fire

  bomb(bombIndex){
    const App = this;
    window.setTimeout(function(){
      App.explosion(bombIndex)},3000)
  }; //Start bomb/explosion timer

  explosion(bombIndex){
    const tiles = this.state.tiles;
    const showMe = fourWay(tiles[bombIndex]);
    function fourWay(bCoords) {
      const exCoords = []
      exCoords.push([{x: bCoords.x + 1, y: bCoords.y},{x: bCoords.x + 2, y: bCoords.y}])
      exCoords.push([{x: bCoords.x - 1, y: bCoords.y},{x: bCoords.x - 2, y: bCoords.y}])
      exCoords.push([{x: bCoords.x, y: bCoords.y + 1},{x: bCoords.x, y: bCoords.y + 2}])
      exCoords.push([{x: bCoords.x, y: bCoords.y - 1},{x: bCoords.x, y: bCoords.y - 2}])
      return exCoords
    } //Get explosion "radius"
    this.setState({
      tiles: update(this.state.tiles, {[bombIndex]: {
        bomb: {$set: false},
        playerOne: {$set: false},
        fire: {$set: true}
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
            fire: {$set: true},
            crate: {$set: false},
            playerOne: {$set: false}
          }})
        })
        if (willExplode[0].crate === false) {
          this.setState({
            tiles: update(this.state.tiles, {[twoExplode]: {
              fire: {$set: true},
              crate: {$set: false},
              playerOne: {$set: false}
            }})
          })
        };
      } else {
          return
      };
    }
  }; //End Explosion

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

  saveUserData() {
    helpers.writeUserData();
    console.log("save user stuff")
  }

  // writeUserData(event){
  //     firebase.database().ref('users/' + this.state.userId).set({
  //           score: "WON",
  //           username: "Hello everyone"})
  //           console.log("done")
  //         .then(function() {
  //           return ref.once("value")
  //         })
  //         console.log("also done")
  //       }
  //         }).then(function() {
  //   return ref.once("value");
  // })
  // .then(function(snapshot) {
  //   const data = snapshot.val(); // data === "hello"

//   });
// }


  //     .ref('users/' + this.state.userId).set({
  //       username: "Hello everyone"
  //     }).then(function() {
  //   return ref.once("value");
  // });
  //     console.log("saved")
  //   }

    getData(event){
    const get =  firebase.database().ref('users/' + this.state.userID).once('value').then(function(snapshot) {
  snapshot.val().username;
  console.log(get)
})
}



  componentDidMount(){

    window.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.setState({tiles: createTiles()});
    // this.fireTimer();//REMEMBER TO GET THIS BACK
  }; //Adds event listener and setsState of gameboard

  render(){
    return(
      <div>
      <br></br>
      <button><Link to="/">Let's go home!</Link></button>
      <div>
        <h1>I won!</h1>
        <button onClick={(event) => this.saveUserData(event)}>Save my score?</button>
      </div>
      <TileContainer tiles={this.state.tiles} />
      <button onClick={(event) => this.getData(event)}>Get My Score</button>
      </div>
    )
  }; //Container worried about one state that changes based on user input.
}

export default Game;
