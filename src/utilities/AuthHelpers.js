import firebaseapp from 'firebase';

const config = {
  apiKey: "AIzaSyDaA4ZGQODQrfl4SX_B8RP7SEWnhkHpviI",
  authDomain: "testingauth-9f65c.firebaseapp.com",
  databaseURL: "https://testingauth-9f65c.firebaseio.com",
  storageBucket: "testingauth-9f65c.appspot.com",
};
firebaseapp.initializeApp(config)

const firebaseUtils = {

    signUp: function (email, pass, obj) {
        const auth = firebaseapp.auth();
        auth.createUserWithEmailAndPassword(email, pass).catch((error) => {
            if (error) {
                console.log("error: ", error)
            }
        }).then((res) => {
            console.log(res);
            firebase.database().ref('users/'+res.uid).set({
                firstName: obj.firstName,
                lastName: obj.lastName,
                userName: obj.userName,
                email: obj.email
            })
        })
    },
    signIn: function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
            console.error(error.code, error.message);
        }).then((res) => {
            console.log("auth", res);
            console.log("auth", res.uid);
            window.localStorage.setItem("uid", res.uid);
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



export default firebaseUtils;
