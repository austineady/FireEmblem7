// State
const state = {
  coords: [8, 13],
  moveList: []
}

// Mutations
const mutations = {
  MOVE(state, arg) {
    console.log(arg);
    state.coords = arg;
    state.moveList.push(arg);
  }
}

// Getters
const getters = {
  getCoords: state => state.coords
}

// Actions
const actions = {
  handleMove(ctx, e) {
    var newCoords;
    if(e.keyCode === 38) {
      // move up
      newCoords = [state.coords[0] - 1 >= 0 ? state.coords[0] - 1 : state.coords[0], state.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 40) {
      // move down
      newCoords = [state.coords[0] + 1 <= 10 ? state.coords[0] + 1 : state.coords[0], state.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 39) {
      // move right
      newCoords = [state.coords[0], state.coords[1] + 1 <= 15 ? state.coords[1] + 1 : state.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 37) {
      // move left
      newCoords = [state.coords[0], state.coords[1] - 1 >= 0 ? state.coords[1] - 1 : state.coords[1]];
      ctx.commit('MOVE', newCoords);
    }
  }
}

export default { state, mutations, actions, getters };
