import firebaseapp from 'firebase';

const userThings = {

  // const  userId = localStorage.getItem("uid")
  saveWinningUser: function(uid, data){
    const fetchSettings = {method: 'PUT', body: JSON.stringify(data)};
    return fetch(`https://testingauth-9f65c.firebaseio.com/users.json`, fetchSettings)
      .then(res => res.json())
  },

//   writeUserData(userId){
//   firebase.database().ref('users/' + userId).set({
//             score: "10",
//             username: "Ivan"})
//
//             console.log("done")
//   console.log("save user stuff")
// }
}

      export default userThings;
