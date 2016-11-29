import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../Styles/App.css';
// import help from '../utils/helpers.js'

class GameOver extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    handleClick(e){
      e.preventDefault();
      // ReactDOM.unmountComponentAtNode(document.getElementById('theGame'))
      browserHistory.push('/game')
    }

    // getData(event){
    //   const get =  firebase.database().ref('users/' + this.state.userID).once('value').then(function(snapshot) {
    //     snapshot.val().username;
    //     console.log(get)
    //   })
    // }

    // whoWon(obj) {
    //     if (obj.winner !== "tie!" && obj.winner !== undefined) {
    //         return (
    //             <div>{obj.winner + " Won!"}</div>
    //         )
    //     } else if (obj.winner === "tie!" && obj.winner !== undefined) {
    //         return (
    //             <div>{"it's a tie!"}</div>
    //         )
    //     } else {
    //         return
    //     }
    // }

    // handleChange(e) {
    //     this.setState({
    //         text: e.target.value
    //     })
    // }
    render() {
        return (
            <div className="GameOver">
                <h1>GAME OVER</h1>
                <h3>{this.props.params.winner}</h3>
                <button onClick={ e => this.handleClick(e)}>{"Play Again!"}</button>
            </div>
        );
    }
}

export default GameOver;
