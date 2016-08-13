const movement = function(event, position){
    event.preventDefault();
    let x = position.x;
    let y = position.y;
    if (event.code === "Space") {
      return "bomb";
    }
    switch (event.code){
      case "ArrowDown":
        y--
        break;
      case "ArrowUp":
        y++
        break;
      case "ArrowLeft":
        x--
        break;
      case "ArrowRight":
        x++
        break;
      default:
      }
    return [x,y];
  };

module.exports = movement;
