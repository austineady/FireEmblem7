import Vue from 'vue';
import Vuex from 'vuex';

import tools from '@/tools/tools.js';
import Map from './static/Map.js';
import game from './store/game';
import actions from './actions.js';
// import map from './store/map';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeChar: null,
    selectedChar: Map[8][13].char,
    activeTile: Map[8][13],
    coords: [8, 13],
    moveList: [],
    map: Map,
    moveMap: []
  },
  mutations: {
    // main move mutation
    MOVE(state, arg) {
      var oldTile = state.map[state.coords[0]][state.coords[1]];
      var newTile = state.map[arg[0]][arg[1]];
      oldTile.selected = false;
      newTile.selected = true;
      state.coords = arg;
      state.selectedChar = newTile.char !== null && state.activeChar === null ? newTile.char : null;
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
    // reset selected character
    RESET_SELECTED_CHAR(state) {
      state.selectedChar = null;
    },
    // set an active character (spacebar pressed)
    SET_ACTIVE_CHAR(state, char) {
      state.activeChar = char;
    },
    // reset active character
    RESET_ACTIVE_CHAR(state) {
      state.activeChar = null;
    },
    SET_ACTIVE_TILE(state, tile) {
      state.activeTile = tile;
    },
    // set move map
    SET_MOVE_MAP(state, map) {
      state.moveMap = map;
    },
    SET_MOVE_TILE(state, tile) {
      state.map[tile[1]][tile[0]].moveTile = true;
    },
    SET_ATK_TILE(state, tile) {
      state.map[tile[1]][tile[0]].atkTile = true;
    },
    RESET_TILE(state, tile) {
      state.map[tile[1]][tile[0]].moveTile = false;
      state.map[tile[1]][tile[0]].atkTile = false;
    }
  },
  getters: {
    getActiveTile(state) {
      return state.map[state.coords[0][state.coords[1]]];
    },
    isValid: function(state, arg) {
      return arg.col !== undefined && arg.row !== undefined && state.map[arg.row] !== undefined && state.map[arg.row][arg.col] !== undefined;
    },
    getMap(state) {
      return state.map;
    },
    isCharActive(state) {
      return state.activeChar;
    },
    isCharSelected(state) {
      return state.selectedChar;
    }
  },
  actions: actions,
  modules: {
    game
  },
  strict: true
});
