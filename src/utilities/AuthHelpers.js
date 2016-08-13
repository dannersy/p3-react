import firebaseapp from 'firebase';

const config = {
  apiKey: "AIzaSyDaA4ZGQODQrfl4SX_B8RP7SEWnhkHpviI",
  authDomain: "testingauth-9f65c.firebaseapp.com",
  databaseURL: "https://testingauth-9f65c.firebaseio.com",
  storageBucket: "testingauth-9f65c.appspot.com",
};
firebase.initializeApp(config)

const createUser = {

signUp: function(email, pass) {
    const auth = firebaseapp.auth();
    auth.createUserWithEmailAndPassword(email, pass).then((userResponse) => {
        console.log(userResponse);

      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }
      ).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);

  // ...
});;
  },

  signIn: function(email, password) {

    firebase.auth().signInWithEmailAndPassword(email, password).then((userResponse) => {
        console.log("yars", userResponse.uid);
        firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          alert("You're in!")
          // User is signed in.
        } else {
          alert("Youre not in!")
          // No user is signed in.
        }
      });
      localStorage.setItem(userResponse.uid)
      }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  },


//   firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     alert("You're in!")
//     // User is signed in.
//   } else {
//     alert("Youre not in!")
//     // No user is signed in.
//   }
// });


  signOut: function() {

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
  }
}



export default createUser;
