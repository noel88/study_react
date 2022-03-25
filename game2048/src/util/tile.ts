import {ITile} from "../component/Game";
import {getRandomInteger} from "./number";
import {MAX_POS} from "../constant";

export const getInitialTileList = () => {
  const tileList: ITile[] = []
  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);
  return tileList;
}

const checkCollision = (tileList: ITile[], tile: ITile) => {
  return tileList.some(item => item.x === tile.x && item.y === tile.y)
}
let currentId = 0;
export const makeTile = (tileList: ITile[]) => {
  let tile;
  while (!tile || checkCollision(tileList, tile) ) {
    tile = {
      id: currentId ++,
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2,
    }
  }
  return tile;
}
