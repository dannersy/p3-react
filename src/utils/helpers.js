const help = {
  save: (dataObj, uid) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = "https://bomberman-react.firebaseio.com/"
    return fetch(url, fetchSettings);
  },

  showAll: () => {
    const url = "https://bomberman-react.firebaseio.com/high-scores.json?print=pretty"
    return fetch(url)
  },

 // + "/uid" + "high-scores.json"


}

module.exports = help
