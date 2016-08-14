import firebaseapp from 'firebase';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDaA4ZGQODQrfl4SX_B8RP7SEWnhkHpviI",
  authDomain: "testingauth-9f65c.firebaseapp.com",
  databaseURL: "https://testingauth-9f65c.firebaseio.com",
  storageBucket: "testingauth-9f65c.appspot.com",
};
firebaseapp.initializeApp(config)

const firebaseUtils = {

  signUp: (email, pass) => {
      console.log("signing up...", email, pass);
      firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
          if (err) {
              console.error(err.code, err.message)
          }
      }).then(res => {
        console.log("helper",res);
        firebase.database().ref("users/"+res.uid).set({
          uid: res.uid,
        })
        window.localStorage.setItem("uid", res.uid);
        console.info(window.localStorage.getItem("uid"));
        }
      )
  },
  logIn: (email, pass) => {
      console.log("loggging in...", email, pass);
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(err => {
          // Handle Errors here.
          if (err) {
              console.error(err.code, err.message)
          }
      }).then(res => {
        console.log("logged in...", res);
        window.localStorage.setItem("uid", res.uid);
        console.info(window.localStorage.getItem("uid"));
        }
      );
  },
    checkUser: function(uid) {
  firebase.auth().onAuthStateChanged(function(uid) {
  if (uid) {
    console.log("You're in!")
    // User is signed in.
  } else {
    alert("Youre not in!")
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



export default firebaseUtils;
