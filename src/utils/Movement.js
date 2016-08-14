const movement = function(event, position){
    event.preventDefault();
    let x = position.x;
    let y = position.y;
    if (event.code === "Space") {
      return "bomb";
    }
    if (event.code === "KeyE") {
      return "bomb";
    }
    switch (event.code){
      case "ArrowDown":
        y--
        break;
      case "KeyS":
        y--
        break;
      case "ArrowUp":
        y++
        break;
      case "KeyW":
        y++
        break;
      case "ArrowLeft":
        x--
        break;
      case "KeyA":
        x--
        break;
      case "ArrowRight":
        x++
        break;
      case "KeyD":
        x++
        break;
      default:
      }
    return [x,y];
  };

module.exports = movement;
