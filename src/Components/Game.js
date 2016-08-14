import React, {Component} from 'react';
import update from 'react-addons-update'
import createTiles from '../utils/CreateTiles.js';
import TileContainer from './TileContainer.js';
import movement from '../utils/Movement.js';
import helpers from '../utilities/NormalHelpers';
import firebaseHelpers from '../utilities/AuthHelpers';
import { Link } from 'react-router';
import './Game.css';
import help from '../utils/helpers.js'



class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tiles: [],
      userId: localStorage.getItem("uid"),
      text : "shreiya",
      winner: "false"
    }
  };

  checkWin() {
    const tiles = this.state.tiles;
    const playerOne = this.state.tiles.filter(tile => tile.playerOne === true);
    const playerTwo = this.state.tiles.filter(tile => tile.playerTwo === true);
    if (playerOne.length && playerTwo.length){
      return
    } else if (playerOne.length) {
      this.setState({winner: "player one"})
    } else if (playerTwo.length) {
      this.setState({winner: "player two"})
    } else {
      this.setState({winner: "tie!"})

    }

    if (this.state.winner !== "false") {
      let saveObj = {}
      saveObj.winner = this.state.winner
      saveObj.time = new Date()

      help.save(saveObj, uid).then( res => {
        console.log(res);
        return res.json()
      }).then( json => {
        return console.log("this is the json from saving the highscore", json);
        // this.setState({
        //   highScores: json
        // })
      })
    };
  };

  fireTimer(){
    const App = this;
    window.setInterval(function(){
      App.eachFire();
      App.checkWin();
    }, 500)
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
        playerOne: {$set: false},
        playerTwo: {$set: false}
      }})
    });
  }; //Clear fire, destroy player if inside fire

  bomb(bombIndex){
    const App = this;
    window.setTimeout(function(){
      App.explosion(bombIndex)},3000)
  }; //Start bomb/explosion timer

  fourWay(bCoords) {
    const exCoords = []
    exCoords.push([{x: bCoords.x + 1, y: bCoords.y},{x: bCoords.x + 2, y: bCoords.y}])
    exCoords.push([{x: bCoords.x - 1, y: bCoords.y},{x: bCoords.x - 2, y: bCoords.y}])
    exCoords.push([{x: bCoords.x, y: bCoords.y + 1},{x: bCoords.x, y: bCoords.y + 2}])
    exCoords.push([{x: bCoords.x, y: bCoords.y - 1},{x: bCoords.x, y: bCoords.y - 2}])
    return exCoords;
  }; //Get explosion "radius"

  explosion(bombIndex){
    const tiles = this.state.tiles;
    const showMe = this.fourWay(tiles[bombIndex]);
    this.setState({
      tiles: update(this.state.tiles, {[bombIndex]: {
        bomb: {$set: false},
        playerOne: {$set: false},
        fire: {$set: true},
        playerTwo: {$set: false}
      }})
    });
    for (let i = 0; i < showMe.length; i++) {
      let checkExp = showMe[i]
      let willExplode = tiles.filter(tile => tile.x === checkExp[0].x && tile.y === checkExp[0].y && tile.cement === false);
      let willExplodeTwo = tiles.filter(tile => tile.x === checkExp[1].x && tile.y === checkExp[1].y && tile.cement === false);
      if (willExplode[0]) {
        const toExplode = tiles.indexOf(willExplode[0])
        const twoExplode = tiles.indexOf(willExplodeTwo[0])
        this.setState({
          tiles: update(this.state.tiles, {[toExplode]: {
            fire: {$set: true},
            crate: {$set: false},
            playerOne: {$set: false},
            playerTwo: {$set: false}
          }})
        })
        if (willExplodeTwo[0] && tiles[toExplode].crate === false) {
          this.setState({
            tiles: update(this.state.tiles, {[twoExplode]: {
              fire: {$set: true},
              crate: {$set: false},
              playerOne: {$set: false},
              playerTwo: {$set: false}
            }})
          })
        }; //End block radius 2
      } //End block radius 1
    } //End loop
  }; //End Explosion

  handleKeyDown(event){
    if (event.code === "KeyW" || event.code === "KeyE" || event.code === "KeyA" || event.code === "KeyD" || event.code === "KeyS") {
      let position = this.state.tiles.filter(tile => tile.playerTwo === true);
      let newPosition = movement(event, position[0]);
      let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false && tile.playerOne === false)
      if (atPosition.length) {
        const old = this.state.tiles.indexOf(position[0]);
        const newer = this.state.tiles.indexOf(atPosition[0]);
        this.setState({
          tiles: update(this.state.tiles, {[old]: {playerTwo: {$set: false}}})
        })
        this.setState({
          tiles: update(this.state.tiles, {[newer]: {playerTwo: {$set: true}}})
        })
      } else if (newPosition === "bomb") {
          console.log("plant bomb");
          const i = this.state.tiles.indexOf(position[0]);
          this.setState({
            tiles: update(this.state.tiles, {[i]: {bomb: {$set: true}}})
          })
          if (this.state.tiles[i].bomb === true) {
            return this.bomb(i);
        }
      } //end first if with playerTwo movement
    } else if (event.code === "ArrowUp" || event.code === "Space"|| event.code === "ArrowDown" || event.code === "ArrowRight" || event.code === "ArrowLeft"){
      let position = this.state.tiles.filter(tile => tile.playerOne === true);
      let newPosition = movement(event, position[0]);
      let atPosition = this.state.tiles.filter(tile => tile.x === newPosition[0] && tile.y === newPosition[1] && tile.cement === false && tile.crate === false && tile.bomb === false && tile.playerTwo === false)
      if (atPosition.length) {
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
        }
      } else return
    }; //end movement playerOne movement

  saveUserData() {
    const data = {
      saved : this.state.text
    }
    console.log(this.state.text)
    helpers.saveWinningUser(this.state.userId, data)
    .then(res => {
      console.log(res)
    })
    }

    //to check whether there is a user or not
    checkIfUser() {
      firebaseHelpers.checkUser(this.state.userId)
      console.log("YAY! You're in!")
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

    this.checkIfUser(this.state.userId)
  }; //Adds event listener and setsState of gameboard

  render(){
    return(
      <div>
      <br></br>
      <button><Link to="/">Let's go home!</Link></button>
      <div>
        <h1>{this.state.text} won!</h1>
        <button onClick={(event) => this.saveUserData(event)}>Save this bit of info?</button>
      </div>
      <TileContainer tiles={this.state.tiles} />
      <button onClick={(event) => this.getData(event)}>Get My Score</button>
      </div>
    )
  }; //Container worried about one state that changes based on user input.
}

export default Game;
