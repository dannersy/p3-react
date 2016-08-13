const help = {

  stored: "",

  store: (gift) => {
    // console.log(gift);
    help.stored = gift
    return gift
  },

  getFromHelper: () => {
    // const stored = help.store()
    // console.log(stored)
    return help.stored
  },

  makeArray: (arr, stateObj) => {
    for (let key in stateObj) {
      if (stateObj.hasOwnProperty(key)) {
        arr.push(stateObj[key]);
      }
    }
    return arr
  }
}

module.exports = help
