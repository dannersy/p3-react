export default {

  saveStuff: function(data) {
    const fetchSettings = {
      method : 'POST',
      body: JSON.stringify(data)
    }
    console.log(data)
    return fetch("https://testingauth-9f65c.firebaseio.com/stuff.json", fetchSettings).then(res => {
      return res.json();
    })
  }
}
