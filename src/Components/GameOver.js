import React, { Component } from 'react';
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

    // handleSubmit(e) {
    //     e.preventDefault()
    //     const savedObj = help.grabObj()
    //     console.log(savedObj.winner + "wins!");
    //     const initials = this.state.text
    //     if (savedObj) {
    //         savedObj.initials = initials
    //         const test = help.save(savedObj)
    //         console.log(test);
    //     }
    // }

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

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {

        return (
            <div className="GameOver">
                <h1>GAME OVER</h1>
                <h3></h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input onChange={(event) => this.handleChange(event)} type="text" placeholder="input your initials" maxLength="3"></input>
                    <button>{"Submit to High Scores"}</button>
                </form>
            </div>
        );
    }
}

export default GameOver;
