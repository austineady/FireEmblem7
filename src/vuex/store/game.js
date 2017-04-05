const state = {
  // current state of game map
  map: [],
  // current list of characters
  characters: [],
  // current phase: 1 - Player, 2 - Enemy, 3 - Ally
  phase: null,
  // what turn is user on
  turn: 0,
  // hovered character under selector
  hovered: null,
  // active character (selected)
  active: null,
  // list of possible moves based on character movement stat
  moveList: [],
  // list of attackable characters in move area
  attackList: [],
}
