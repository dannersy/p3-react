const createTiles = function(){
  let tiles = [];
  for ( let j = 9; j >= 1; j-- ) {
    for ( let i = 1; i <= 9; i++ ) {
      let obj = {};
      obj.x = i;
      obj.y = j;
      obj.playerOne = false;
      if ((i === 1 && j === 9) || (i === 2 && j === 9) || (i === 1 && j === 8)){
        obj.crate = false;
      } else if ((i === 9 && j === 1) || (i === 8 && j === 1) || (i === 9 && j === 2)){
        obj.crate = false;
      } else {
        obj.crate = (Math.random() <= 0.5);
      }
      if (obj.y % 2 === 0 && obj.x % 2 === 0) {
        obj.cement = true
      } else {
        obj.cement = false;
      }
      obj.bomb = false;
      obj.playerTwo = false;
      obj.fire = false;
      tiles.push(obj);
    }
  }
  tiles[80].playerOne = true;
  tiles[79].playerTwo = true;


  // for (let i = 0; i < tiles.length; i++){
  //   if (i === 0 || i ===  1 || i ===  9 || i ===  80 || i ===  79 || i ===  71){
  //     tiles[i].crate === false;
  //   } else if (Math.random() <= 0.5){
  //     tiles[i].crate === true;
  //   }
  // }

  return tiles;

};

module.exports = createTiles;
