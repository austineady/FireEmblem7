// Terrain Map
// 0 unwalkable
// 1 plains
// 2 woods
// 3 sand
// 4 mountains
// 5 peak
// 6 sea
// 7 fortress
// 8 village
// 9 pillar
// 10 throne
// 11 Armory
// 12 Vendor
// 13 Arena
// 14 House
// 15 Inn
// 16 Ruins
// Semantic Locations
// 1.1 Barrel
// 1.2 Brace
// 1.3 Bridge
// 1.4 Bone
// 1.5 Chest
// 1.6 Door
// 1.7 Deck
// 1.8 Fence
// 1.9 Floor
// 1.10 Road
// 1.11 River
// 1.12 Stairs
// 1.13 Thicket
// 1.14 Wall
// 0.1 Cliff
import Terrain from './terrain.js';

function Map() {
  var newMap = [];
  var data = {
    background: 'assets/images/background/bg-map-1.png',
    terrain: [
      // Row 1
      [4, 4, 0, 0, 0, 1, 1, 2, 1, 4, 4, 5, 5, 5, 5],
      // Row 2
      [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 4, 4, 5, 5],
      // Row 3
      [1, 1, 0, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
      // Row 4
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Row 5
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Row 6
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Row 7
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      // Row 8
      [0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
      // Row 9
      [0.1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 2, 1],
      // Row 10
      [0.1, 1, 2, 1, 1, 1, 1, 1, 1, 0.1, 0.1, 0.1, 0.1, 1, 14]
    ],
    characters: [
      {
        class: 'lyn',
        mugshot: 'lyn-mugshot',
        id: 1,
        row: 8,
        col: 13,
        bgp: '-352px -348px',
        displayName: 'Lyn',
        type: 'hero',
        maxHealth: 16,
        level: 1,
        stats: {
          hp: {
            val: 16,
            growth: 0.7,
            max: 60
          },
          pow: {
            val: 4,
            growth: 0.4,
            max: 24
          },
          skl: {
            val: 7,
            growth: 0.6,
            max: 29
          },
          spd: {
            val: 9,
            growth: 0.6,
            max: 30
          },
          luc: {
            val: 5,
            growth: 0.55,
            max: 30
          },
          def: {
            val: 2,
            growth: 0.2,
            max: 22
          },
          res: {
            val: 0,
            growth: 0.3,
            max: 22
          },
          mov: {
            val: 5,
            growth: 0
          },
          con: {
            val: 5,
            growth: 0
          },
          aid: {
            val: 4,
            growth: 0
          }
        },
        promotion: {
          hp: 3,
          pow: 2,
          skl: 2,
          luc: 0,
          def: 3,
          res: 5,
          mov: 1,
          con: 1,
          aid: 1
        }
      },
      {
        class: 'bandit',
        mugshot: 'bandit-mugshot',
        id: 2,
        row: 2,
        col: 3,
        bgp: '-608px -2028px',
        displayName: 'Bandit',
        type: 'enemy',
        maxHealth: 21
      }
    ]
  };

  data.terrain.forEach(function(row, index) {
    var newRow = [];
    row.forEach(function(col, idx) {
      var baseTile = {
        tid: index + ',' + idx,
        ter: Terrain['t' + col],
        char: null,
        moveTile: false,
        atkTile: false,
        selected: false,
        moveMap: [],
        atkList: [],
        rescueList: [],
        actionList: [],
        coords: [index, row]
      };
      newRow.push(baseTile);
      return;
    })
    newMap.push(newRow);
    return;
  })

  if(data.characters.length > 0) {
    data.characters.forEach(function(char) {
      char.health = char.maxHealth;
      char.healthDiff = (char.health / char.maxHealth) * 100 + '%';
      newMap[char.row][char.col].char = char;
      newMap[char.row][char.col].collide = true;
    })
  }

  newMap[8][13].selected = true;

  return newMap;
}

var map = new Map();
console.log(map);
export default map;
