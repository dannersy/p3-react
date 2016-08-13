const keyDown = function(e, manCoords) {
    const newObj = {x: manCoords.x, y: manCoords.y};
    if (e.keyCode === 37 || e.keyCode === 65) {
      newObj.x --;
      return newObj;
    } else if (e.keyCode === 38 || e.keyCode === 87) {
      newObj.y ++;
      return newObj;
    } else if (e.keyCode === 39 || e.keyCode === 68) {
      newObj.x ++;
      return newObj;
    } else if (e.keyCode === 40 || e.keyCode === 83) {
      newObj.y --;
      return newObj;
    } else if (e.keyCode === 18 || e.keyCode === 69) {
      return newObj
      // console.log("bomb dropped!");
    } else {
      return
    }
}

module.exports = keyDown;
