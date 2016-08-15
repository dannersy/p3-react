import firebaseapp from 'firebase';
import firebase from 'firebase';
import { browserHistory } from 'react-router';

var config = {
  apiKey: "AIzaSyDaA4ZGQODQrfl4SX_B8RP7SEWnhkHpviI",
  authDomain: "testingauth-9f65c.firebaseapp.com",
  databaseURL: "https://testingauth-9f65c.firebaseio.com",
  storageBucket: "testingauth-9f65c.appspot.com",
  };


  firebase.initializeApp(config)

  const createUser = {
  // signUp: function(email, password, username) {
  //     const auth = firebaseapp.auth();
  //     auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
  //     console.log("USERRESPONSE", userResponse);
  //   }).catch(function(error){
  //     console.log('test',error);
  //   }).then(response => {
  //       console.log("logged in...", response);
  //       window.localStorage.setItem("uid", response.uid);
  //       console.info(window.localStorage.getItem("uid"));
  //     })
  //   .then((response) => {
  //     console.log("CurrentUser",firebase.auth().currentUser);
  //     const user = firebase.auth().currentUser;
  //     if (user != null) {
  //       user.updateProfile({
  //         displayName: username
  //       }).then(function() {
  //           console.log('SignUp Successful');
  //           console.log(username);
  //         }, function(error) {
  //           console.log("An error occured on Update");
  //         })
  //     }
  //   })
  //   },


  signUp: function(email, pass, data) {
        console.log("signing up...", email, pass);
        console.info("data", data);
        firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
            if (err) {
                console.error(err.code, err.message)
            }
        }).then(res => {
                console.log("helper", res);
                firebase.database().ref("/users" + res.uid).set({
                    uid: res.uid,
                    displayName: data.userName
                });
                window.localStorage.setItem("uid", res.uid);
                console.info(window.localStorage.getItem("uid"));
                window.localStorage.setItem("displayName", data.userName);
                console.info(window.localStorage.getItem("displayName"));
            }
        )
    },

 //
 //  logIn: function(email, password) {
 //   let response = firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
 //    console.log("hallo", response)
 //     return response
 // })
 // return response;
 // },

 logIn: (email, pass) => {
        console.log("loggging in...", email, pass);
        firebase.auth().signInWithEmailAndPassword(email, pass)
        // const user = firebase.auth().currentUser;
        //       if (user) {
        //         console.log(data.userName," Signed in");
        //       } else {
        //         console.log("No user Signed in");
        //       }
        .catch(err => {
            // Handle Errors here.
            if (err) {
                console.error(err.code, err.message)
            }
        })
        .then(res => {
                console.log("logged in...", res);
                window.localStorage.setItem("uid", res.uid);
                console.info(window.localStorage.getItem("uid"));
            }
        );
    },

 // logIn: function(email, password) {
 //     let response = firebase.auth().signInWithEmailAndPassword(email, password).then((response) => {
 //       const user = firebase.auth().currentUser;
 //             if (user) {
 //               console.log(data.userName," Signed in");
 //             } else {
 //               console.log("No user Signed in");
 //             }
 //      console.log("hallo", response)
 //       return response
 //   })
 //   },

  // logIn: (email, pass) => {
  //   console.log("loggging in...", email, pass);
  //   firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
  //       // Handle Errors here.
  //       if (err) {
  //
  //         console.error(err.code, err.message)
  //       }
  //   }).then(res => {
  //     console.log("logged in...", res);
  //     window.localStorage.setItem("uid", res.uid);
  //     console.info(window.localStorage.getItem("uid"));
  //     }
  //   )
  // },

  checkUser: function (uid) {
    firebase.auth().onAuthStateChanged(function(uid) {
    if (uid) {
      return true
      // User is signed in.
    } else {
      alert("Youre not in!")
      const path = `/log-in`
      return browserHistory.push(path)
      // No user is signed in.
    }
    });
  },

  signOut: function() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  });
  }
}



export default createUser;
