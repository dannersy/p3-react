const createTiles = function(){
  let tiles = [];
  for ( let j = 9; j >= 1; j-- ) {
    for ( let i = 1; i <= 9; i++ ) {
      let obj = {};
      obj.x = i;
      obj.y = j;
      obj.playerOne = false;
      obj.crate = false;
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
  // console.log(tiles);
  // const rando = Math.floor(Math.random() * 81)
  tiles[80].playerOne = true;
  tiles[79].playerTwo = true;

  tiles[40].crate = true;
  // tiles[41].crate = true;
  // tiles[39].crate = true;
  tiles[31].crate = true;
  tiles[49].crate = true;
  return tiles;

};

module.exports = createTiles;
