// State
const state = {
  map: [],
  // current list of characters
  characters: []
}

// Mutations
const mutations = {
  SET_MAP(state, arg) {
    state.map = arg;
  },
  REGISTER(state, arg) {
    state.map[arg.row][arg.col][arg.prop] = arg.val;
  },
  UNREGISTER(stage, arg) {
    state.map[arg.row][arg.col][arg.prop] = arg.val;
  },
  SET_CHARACTERS(state, arg) {
    state.characters = arg;
  }
}

// Getters
const getters = {
  isValid: function(state, arg) {
    return arg.col !== undefined && arg.row !== undefined && state.map[arg.row] !== undefined && state.map[arg.row][arg.col] !== undefined;
  }
}

// Actions
const actions = {
  setMap(ctx, arg) {
    ctx.commit('SET_MAP', arg);
  },
  registerCharacter(ctx, character) {
    if(getters.isValid(character)) {
      ctx.commit('REGISTER', {
        row: character.row,
        col: character.col,
        prop: 'char',
        val: character
      });
    }
  },
  unregisterCharacter(ctx, character) {
    if(getters.isValid(character)) {
      ctx.commit('UNREGISTER', {
        row: character.row,
        col: character.col,
        prop: 'char',
        val: null
      })
    }
  },
  registerMoveTile(ctx, tile) {
    if(getters.isValid(tile)) {
      ctx.commit('REGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'moveTile',
        val: true
      })
    }
  },
  unregisterMoveTile(ctx, tile) {
    if(getters.isValid(tile)) {
      ctx.commit('UNREGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'moveTile',
        val: false
      })
    }
  },
  registerAtkTile(ctx, tile) {
    if(getters.isValid(tile)) {
      ctx.commit('REGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'atkTile',
        val: true
      })
    }
  },
  unregisterAtkTile(ctx, tile) {
    if(getters.isValid(tile)) {
      ctx.commit('UNREGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'atkTile',
        val: false
      })
    }
  },
  setCharacters(ctx, arg) {
    ctx.commit('SET_CHARACTERS', arg);
  }
}

export default { state, mutations, getters, actions };
