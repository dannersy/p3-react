const help = {
  saved: "",
  savedTwoWithInitials: [],
  save: (dataObj) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = "https://bomberman-react.firebaseio.com/non-user-high-scores.json"
    return fetch(url, fetchSettings);
  },
  saveToUser: (dataObj, uid) => {
    const fetchSettings = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(dataObj)
    }
    const url = `https://bomberman-react.firebaseio.com/users/${uid}/high-scores.json`
    return fetch(url, fetchSettings);
  },
  saveAnObj: (saveObj) => {
    return help.saved = saveObj
  },
  saveInitials: (saveObj) => {
    help.savedTwoWithInitials.push(saveObj)
    return help.savedTwoWithInitials
  },
  grabObj: () => {
    return help.saved
  },
  showAll: () => {
    const url = "https://bomberman-react.firebaseio.com/non-user-high-scores.json?print=pretty"
    return fetch(url)
  }
}

module.exports = help
