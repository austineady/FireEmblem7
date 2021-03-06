// State Object
// ------------------------------------------
const state = {
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
  // Hud object
  hud: {},
  // Hud state
  hudActive: false,
  // Tile Dash Object
  dash: {},
  // Tile Stats state
  dashActive: false,
  // Move History
  moveHistory: []
}

// Getters
// ------------------------------------------
// Example:
// const store = new Vuex.Store({
//   state: {
//     todos: [
//       { id: 1, text: '...', done: true },
//       { id: 2, text: '...', done: false }
//     ]
//   },
//   getters: {
//     doneTodos: state => {
//       return state.todos.filter(todo => todo.done)
//     }
//   }
// })

// Mutations
// http://vuex.vuejs.org/en/mutations.html
// ------------------------------------------
// Example:
// const store = new Vuex.Store({
//   state: {
//     count: 1
//   },
//   mutations: {
//     increment (state, payload) {
//       state.count += payload.amount
//     }
//   }
// })
//
// store.commit('increment', {
//   amount: 10
// })

const mutations = {
  BEGIN_PLAYER_PHASE(state) {
    state.turn = 1;
  },
  BEGIN_ENEMY_PHASE(state) {
    state.turn = 2;
  },
  BEGIN_ALLY_PHASE(state) {
    state.turn = 2;
  },
  BEGIN_NEXT_TURN(state) {
    state.turn += 1;
  },
  SET_HOVER(state, arg) {
    state.hovered = arg;
  },
  REMOVE_HOVER(state) {
    state.hovered = null;
  },
  SET_ACTIVE(state, arg) {
    state.active = arg;
  },
  REMOVE_ACTIVE(state) {
    state.active = null;
  }
}

// Actions
// -----------------------------------------------
// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   },
//   actions: {
//     increment (context) {
//       context.commit('increment')
//     }
//   }
// })

const actions = {
  beginPlayerPhase(ctx) {
    ctx.commit('BEGIN_PLAYER_PHASE');
  },
  beginEnemyPhase(ctx) {
    ctx.commit('BEGIN_ENEMY_PHASE');
  },
  beginAllyPhase(ctx) {
    ctx.commit('BEGIN_ALLY_PHASE');
  },
  beginNextTurn(ctx) {
    ctx.commit('BEGIN_NEXT_TURN');
  },
  setHover(ctx, arg) {
    ctx.commit('SET_HOVER', arg);
  },
  removeHover(ctx) {
    ctx.commit('REMOVE_HOVER');
  },
  setActive(ctx, arg) {
    ctx.commit('SET_ACTIVE', arg);
  },
  removeActive(ctx) {
    ctx.commit('REMOVE_ACTIVE');
  }
}

export default { state, mutations, actions };
