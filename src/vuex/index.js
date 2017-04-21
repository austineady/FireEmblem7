import Vue from 'vue';
import Vuex from 'vuex';

import tools from '@/tools/tools.js';
import Map from './static/Map.js';
import game from './store/game';
import actions from './actions.js';
import battle from './store/battle';
// import map from './store/map';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeChar: null,
    selectedChar: Map[8][13].char,
    activeTile: Map[8][13],
    coords: [8, 13],
    rescueList: [],
    atkList: [],
    map: Map,
    atkMap: [],
    menuActive: false,
    options: ['Item', 'Wait'],
    playerTurn: true,
    optsIndex: 0,
    charList: [1],
    enemyList: [2],
    charQue: [1],
    enemyQue: [2],
    showUI: true,
    moving: false,
    attacking: false
  },
  mutations: {
    // main move mutation
    MOVE(state, arg) {
      var oldTile = state.map[state.coords[0]][state.coords[1]];
      var newTile = state.map[arg[0]][arg[1]];
      oldTile.selected = false;
      newTile.selected = true;
      state.coords = arg;
      state.selectedChar = newTile.char !== null ? newTile.char : null;
      state.activeTile = newTile;
    },
    MOVE_CHAR(state) {
      state.map[state.activeChar.row][state.activeChar.col].char = null;
      state.map[state.coords[0]][state.coords[1]].char = state.activeChar;
      state.activeChar.row = state.coords[0];
      state.activeChar.col = state.coords[1];
    },
    // set character in selected tile
    SET_SELECTED_CHAR(state, char) {
      state.selectedChar = char;
    },
    // set an active character (spacebar pressed)
    SET_ACTIVE_CHAR(state, char) {
      state.activeChar = char;
    },
    // reset active character
    RESET_ACTIVE_CHAR(state) {
      state.activeChar = null;
    },
    SET_LOCAL_ATK_TILE(state, tile) {
      state.moving = true;
      state.map[tile[1]][tile[0]].atkTile = true;
      state.atkList.push(tile);
    },
    SET_MOVE_TILES(state) {
      state.activeChar.moveMap[0].forEach((tile) => {
        if(state.map[tile[1]] !== undefined && state.map[tile[1]][tile[0]] !== undefined) {
          state.map[tile[1]][tile[0]].moveTile = true;
        }
      })
      state.activeChar.moveMap[1].forEach((tile) => {
        if(state.map[tile[1]] !== undefined && state.map[tile[1]][tile[0]] !== undefined) {
          state.map[tile[1]][tile[0]].atkTile = true;
          state.atkMap.push(tile);
        }
      })
    },
    RESET_TILE(state, tile) {
      if(state.map[tile[1]] !== undefined && state.map[tile[1]][tile[0]] !== undefined) {
        state.map[tile[1]][tile[0]].moveTile = false;
        state.map[tile[1]][tile[0]].atkTile = false;
      }
    },
    ACTIVATE_MENU(state) {
      state.menuActive = true;
    },
    DEACTIVATE_MENU(state) {
      state.menuActive = false;
    },
    START_ENEMY_PHASE(state) {
      state.playerTurn = false;
    },
    START_PLAYER_PHASE(state) {
      // reset player que
      state.charQue = state.charList.slice(0);
      // start player turn over
      state.playerTurn = true;
    },
    SET_OPTS_INDEX(state, arg) {
      state.optsIndex = arg;
    },
    RESET_OPTS_INDEX(state) {
      state.optsIndex = 0;
    },
    ADD_ATTACK_OPTION(state) {
      state.options.splice(0, 0, 'Attack');
    },
    ADD_RESCUE_OPTION(state) {
      state.options.splice(1, 0, 'Rescue');
    },
    ADD_TRADE_OPTION(state) {
      state.options.splice(3, 0, 'Trade');
    },
    SET_ATTACK_LIST(state, arg) {
      state.activeChar.atkList = arg;
    },
    BEGIN_MOVE(state) {
      state.moving = true;
    },
    BEGIN_ATTACK(state) {
      state.attacking = true;
    },
    END_MOVE(state) {
      state.moving = false;
      state.map.forEach((row) => {
        row.forEach((col) => {
          col.moveTile = false;
          col.atkTile = false;
        })
      })
    },
    END_CHAR_TURN(state) {
      // remove char from char que
      state.charQue = state.charQue.filter(function(char) {
        if(char !== state.activeChar.id) {
          return char;
        }
      })
      state.atkMap = [];
    }
  },
  getters: {
    isValid: function(state, arg) {
      return arg.col !== undefined && arg.row !== undefined && state.map[arg.row] !== undefined && state.map[arg.row][arg.col] !== undefined;
    },
    actionList(state) {
      if(state.activeChar !== null) {
        var attackable = false;
        // Container
        var actionList = [];
        // Tile Top
        var tt = [state.coords[1], state.coords[0] - 1];
        // Tile Bottom
        var tb = [state.coords[1], state.coords[0] + 1];
        // Tile Left
        var tl = [state.coords[1] - 1, state.coords[0]];
        // Tile Right
        var tr = [state.coords[1] + 1, state.coords[0]];
        [tt, tb, tl, tr].forEach(function(tile) {
          if(state.map[tile[1]][tile[0]].char !== null && state.map[tile[1]][tile[0]].char.type === 'enemy') {
            attackable = true;
          }
          actionList.push(tile);
          return;
        })
        actionList = attackable ? actionList : [];
        return actionList;
      }
    }
  },
  actions: actions,
  strict: true
});
