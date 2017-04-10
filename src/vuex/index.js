import Vue from 'vue';
import Vuex from 'vuex';

import tools from '@/tools/tools.js';

import game from './store/game';
import actions from './actions.js';
// import map from './store/map';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeChar: null,
    selectedChar: null,
    activeTile: null,
    coords: [8, 13],
    moveList: [],
    map: [],
    moveMap: [],
    atkMap: []
  },
  mutations: {
    // main move mutation
    MOVE(state, arg) {
      state.map[state.coords[0]][state.coords[1]].selected = false;
      state.map[arg[0]][arg[1]].selected = true;
      state.coords = arg;
      state.activeTile = state.coords.slice(0);
    },
    MOVE_CHAR(state) {
      state.map[state.activeChar.row][state.activeChar.col].char = null;
      state.map[state.coords[0]][state.coords[1]].char = state.activeChar;
      state.activeChar.row = state.coords[0];
      state.activeChar.col = state.coords[1];
    },
    // set character in selected tile
    SET_SELECTED_CHAR(state, arg) {
      state.selectedChar = arg;
    },
    // reset selected character
    RESET_SELECTED_CHAR(state) {
      state.selectedChar = null;
    },
    // set an active character (spacebar pressed)
    SET_ACTIVE_CHAR(state, arg) {
      state.activeChar = arg;
    },
    // reset active character
    RESET_ACTIVE_CHAR(state) {
      state.activeChar = null;
    },
    // set move map
    SET_MOVE_MAP(state, arg) {
      state.moveMap = arg;
    },
    // set base map
    SET_MAP(state, arg) {
      state.map = arg;
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
    },
    REGISTER(state, arg) {
      state.map[arg.row][arg.col][arg.prop] = arg.val;
    },
    UNREGISTER(state, arg) {
      state.map[arg.row][arg.col][arg.prop] = arg.val;
    },
    SET_CHARACTERS(state, arg) {
      state.characters = arg;
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
