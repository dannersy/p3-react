import React, { Component } from 'react';
import './App.css';
import ZeroZero from './ZeroZero'
import help from '../utils/helpers.js'

class App extends Component {
  // store
  constructor(props) {
    super(props);
    this.state = {
      zeroEight: "earth",
      oneEight: "earth",
      twoEight: "bomb",
      threeEight: "earth",
      fourEight: "earth",
      fiveEight: "earth",
      sixEight: "earth",
      sevenEight: "earth",
      eightEight: "earth",

      zeroSeven: "earth",
      oneSeven: "wall",
      twoSeven: "earth",
      threeSeven: "wall",
      fourSeven: "earth",
      fiveSeven: "wall",
      sixSeven: "earth",
      sevenSeven: "wall",
      eightSeven: "earth",

      zeroSix: "earth",
      oneSix: "earth",
      twoSix: "earth",
      threeSix: "earth",
      fourSix: "earth",
      fiveSix: "earth",
      sixSix: "earth",
      sevenSix: "earth",
      eightSix: "earth",

      zeroFive: "earth",
      oneFive: "wall",
      twoFive: "earth",
      threeFive: "wall",
      fourFive: "earth",
      fiveFive: "wall",
      sixFive: "earth",
      sevenFive: "wall",
      eightFive: "earth",

      zeroFour: "earth",
      oneFour: "earth",
      twoFour: "earth",
      threeFour: "earth",
      fourFour: "earth",
      fiveFour: "earth",
      sixFour: "earth",
      sevenFour: "earth",
      eightFour: "earth",

      zeroThree: "earth",
      oneThree: "wall",
      twoThree: "earth",
      threeThree: "wall",
      fourThree: "earth",
      fiveThree: "wall",
      sixThree: "earth",
      sevenThree: "wall",
      eightThree: "earth",

      zeroTwo: "earth",
      oneTwo: "earth",
      twoTwo: "earth",
      threeTwo: "earth",
      fourTwo: "earth",
      fiveTwo: "earth",
      sixTwo: "earth",
      sevenTwo: "earth",
      eightTwo: "earth",

      zeroOne: "earth",
      oneOne: "wall",
      twoOne: "earth",
      threeOne: "wall",
      fourOne: "earth",
      fiveOne: "wall",
      sixOne: "earth",
      sevenOne: "wall",
      eightOne: "earth",

      zeroZero: "woman",
      oneZero: "earth",
      twoZero: "earth",
      threeZero: "earth",
      fourZero: "earth",
      fiveZero: "earth",
      sixZero: "earth",
      sevenZero: "earth",
      eightZero: "man"
    }
  }

  componentDidMount = () => {
      // console.log(App.Coords);
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }


  // make COORDS and wordarray global methods

  // toChild = () => {
  //
  // }

  // Oldboy = "hi"

  handleKeyDown = (e) => {
    e.preventDefault()
    const Coords = []
    for ( let j = 8; j >= 0; j-- ) {
      for ( let i = 0; i <= 8; i++ ) {
        let obj = {};
        obj.x = i;
        obj.y = j;
        Coords.push(obj);
      }
    } // working
    console.log(App.props);


    const WordArray = []
    const lower = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    const capital = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight']
    for (let i = 8; i >= 0; i--) {
      for (let j = 0; j <= 8; j++) {
        let stri = lower[j].concat(capital[i])
        WordArray.push(stri)
      }
    } // working

    const KeyDown = this
    const arr = [];
    const stateObj = this.state
    let isMale;
    // let justDropped = false
    let bombTimerID;
    let oldIndex;
    let oldObj;
    let newObj;
    let eatState;
    let indexOfOther;
    let newIndex;
    let obj = {};
    let prePos;
    let postPos;
    let oldElement;
    let newElement;
    // console.log("justDropped",justDropped);
    const madeArray = help.makeArray(arr, stateObj)

    if (madeArray) {
      testKey()
    }

    // function helpMe() {
    //   const geter = help.getFromHelper()
    //   console.log(geter);
    //   // return geter
    // }

    function testKey() {
      if (e.keyCode === 37 || e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 40 || e.keyCode === 18) {
        isMale = true
        oldIndex = madeArray.indexOf("man");
        oldObj = Coords[oldIndex];
        indexOfOther = madeArray.indexOf("woman");
        newObject()
      } else if (e.keyCode === 87 || e.keyCode === 68 || e.keyCode === 83 || e.keyCode === 69 || e.keyCode === 65) {
        isMale = false
        oldIndex = madeArray.indexOf("woman");
        oldObj = Coords[oldIndex];
        indexOfOther = madeArray.indexOf("man");
        newObject()
      } else {
        return
      }
    }

    // function standingOnBomb() {
    //   oldIndex = madeArray.indexOf('bombAndMan')
    //   console.log("fds".oldIndex);
    //   oldObj = Coords[oldIndex]
    //   if (oldIndex === madeArray.indexOf('bombAndMan')) {
    //     console.log("201");
    //     newObject()
    //   }
    // }

    function newObject() {
      newObj = {x: oldObj.x, y: oldObj.y};
      if (e.keyCode === 37 || e.keyCode === 65) {
        newObj.x --;
      } else if (e.keyCode === 38 || e.keyCode === 87) {
        newObj.y ++;
      } else if (e.keyCode === 39 || e.keyCode === 68) {
        newObj.x ++;
      } else if (e.keyCode === 40 || e.keyCode === 83) {
        newObj.y --;
      } else if (e.keyCode === 18 || e.keyCode === 69) {
        oldIndex = madeArray.indexOf("bombAndMan")
        console.log("214: bomb dropped!");
        bombTimerID = window.setTimeout(bombTimer, 3000)
      } else {
        return
      }

      // console.log("old", oldObj);
      // console.log("new", newObj);

      if (newObj) {
        findNewIndex()
      }
    }

    function bombTimer() {
      console.log("oldObj", oldObj);
      console.log("KABOOM!");
      // justDropped = false;
      // change state - UI
      clearTimer()
    }

    function clearTimer() {
      console.log("cleared");
      window.clearTimeout(bombTimerID)
    }

    function findNewIndex() {
      for (let i = 0; i < Coords.length; i ++) {
        if (Coords[i].x === newObj.x && Coords[i].y === newObj.y) {
          newIndex = i;
        }
      }
      eatState = madeArray[newIndex]
      console.log(eatState);
      if (newIndex || newIndex === 0) {
        test()
      }
    }

    function test() {
      if (newIndex === indexOfOther) {
        // return console.log('no enemy')
      } else if ((eatState !== "earth") && (eatState !== "man")) {
        // return console.log('nothin but earth or self');
      } else {
        manOrWoman()
      }
    }

    function manOrWoman() {
      if (isMale === true) {
        oldElement = "earth";
        newElement = "man"
      } else {
        oldElement = "earth";
        newElement = "woman"
      }
      settingState()
      // if (oldElement && newElement) {
      //   checkIfBombExists()
      // }
    }

    // function checkIfBombExists() {
    //   if (justDropped === true) {
    //     newElement = "bombAndMan"
    //     settingState()
    //   } else if (justDropped === false) {
    //     settingState()
    //   } else {
    //     settingState()
    //   }
    // }

    function settingState() {
      // console.log("male? ", isMale);
      prePos = WordArray[oldIndex];
      postPos = WordArray[newIndex];
      obj[prePos] = oldElement;
      obj[postPos] = newElement;
      // console.log(obj);
      KeyDown.setState(obj)
      // obj = {zeroOne: }
    }

  } // end handleKeyDown fn

  findMe = (giftFromChild) => {
    let arr = []
    const stateObj = this.state
    for (let key in stateObj) {
      if (stateObj.hasOwnProperty(key)) {
        arr.push(stateObj[key]);
      }
    }
    if (arr) {
      const Index = arr.indexOf(giftFromChild);
      console.log(Index);
      return Index
    }
  }

  render = () => {

    return (
      <div className="App">

        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenEight}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightEight}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenSeven}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightSeven}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenSix}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightSix}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenFive}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightFive}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenFour}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightFour}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenThree}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightThree}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenTwo}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightTwo}/>


        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.zeroOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.oneOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.twoOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.threeOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fourOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.fiveOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sixOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.sevenOne}/>
        <ZeroZero locate={this.findMe.bind(this)} visual={this.state.eightOne}/>


        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.zeroZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.oneZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.twoZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.threeZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.fourZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.fiveZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.sixZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.sevenZero}/>
        <ZeroZero  locate={this.findMe.bind(this)} visual={this.state.eightZero}/>
      </div>
    );
  }
}

export default App;


//words

firstTest() {
  const preCoords = this.props.preCoords;
  const postCoords = this.props.postCoords;
  const keyCode = this.props.keyCode;
  const tileCoords = this.props.pos;

  if ((postCoords.x === pos.x) && (postCoords.y === pos.y)) {
    return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
}


// old zerozero
class ZeroZero extends Component {

  color() {
    const vis = this.props.visual
    if (vis === "man") {
      console.log(help.getFromHelper())
      this.props.locate(vis)
      return <div className="man"><img role="presentation" className="icon" src="http://icons.iconarchive.com/icons/yellowicon/game-stars/128/Bomberman-icon.png"></img></div>
    } else if (vis === "earth") {
      return <div className="earth"></div>
    } else if (vis === "wall") {
      return <div className="wall"><img role='presentation' className='icon' src="https://cdn0.iconfinder.com/data/icons/city-space-1/512/brick_wall-512.png"></img></div>
    } else if (vis === "woman") {
      return <div className="woman"></div>
    } else if (vis === "bomb") {
      console.log(help.getFromHelper())
      this.props.locate(vis)
      return <div className="bomb"><img role='presentation' className="icon" src="https://www.iconfinder.com/icons/1232/bomb_explosive_icon#size=128"></img></div>
    } else if (vis === "bombAndMan") {
      return <div className="bombAndMan"><img role="presentation" className="icon" src="http://d2.alternativeto.net/dist/icons/game-of-bombs_90024.png?width=64&height=64&mode=crop&upscale=false"></img></div>
    } else if (vis === "carry") {
      return <div className="carry"></div>
    } else if (vis === "fire") {
      return <div className="fire"></div>
    } else if (vis === "crate") {
      return <div className="crate"></div>
    }
  }

  render() {
    return (
      <div className="ZeroZero">
        {this.color()}
      </div>
    );
  }
}

export default ZeroZero;
