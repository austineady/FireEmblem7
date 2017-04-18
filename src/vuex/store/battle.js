const battle = {
  state: {
    player: null,
    enemy: null
  },
  mutations: {
    SET_BATTLE_CHARS(state, obj) {
      state.player = obj.player;
      state.enemy = obj.enemy;
    }
  }
}
