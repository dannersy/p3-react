import firebase from 'firebase';

const createUser = {

SignUp: function() {

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
  // ...
})

  }

  SignIn: function() {

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
  }

  SignOut: function() {

    firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
  }
}

export default createUser;
