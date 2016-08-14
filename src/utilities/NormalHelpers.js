import firebaseapp from 'firebase';

const userThings = {

  // const  userId = localStorage.getItem("uid")

  writeUserData(){
      const saveThings = firebase.database().ref('users/' + localStorage.getItem("uid")).set({
            score: "WON",
            username: "Hello Hello"})
            console.log("done");
            saveThings.then(function() {
              console.log(saveThings)
            // return ref.once("value")
          }).then(function(snapshot) {
    const data = snapshot.val(); // data === "hello"
  });
          return saveThings;
          console.log("also done")
        }
      }

      export default userThings
