import tools from '@/tools/tools.js';

export default function handleSpacebar(ctx) {
  if(ctx.state.selectedChar !== null && ctx.state.activeChar === null) {
    // Set character as active
    ctx.commit('SET_ACTIVE_CHAR', ctx.state.selectedChar);
    // Get character move map
    var moveMap = tools.calculateMove(ctx.state.coords, ctx.state.map);
    ctx.commit('SET_MOVE_MAP', moveMap);
    // Register map
    moveMap[0].forEach(function(tile) {
      if(ctx.state.map[tile[1]] !== undefined && ctx.state.map[tile[1]][tile[0]] !== undefined) {
        ctx.commit('SET_MOVE_TILE', tile);
      }
    })
    moveMap[1].forEach(function(tile) {
      if(ctx.state.map[tile[1]] !== undefined && ctx.state.map[tile[1]][tile[0]] !== undefined) {
        ctx.commit('SET_ATK_TILE', tile);
      }
    })
  } else if(ctx.state.selectedChar === null && ctx.state.activeChar !== null) {
    // character position move
    if(ctx.state.activeTile.moveTile === true) {
      ctx.commit('MOVE_CHAR');
      // Set character as active
      ctx.commit('SET_SELECTED_CHAR', ctx.state.activeChar);
    }
  } else if(ctx.state.selectedChar !== null && ctx.state.activeChar !== null) {
    // remove move map and active char
    ctx.state.moveMap[0].forEach(function(tile) {
      ctx.commit('RESET_TILE', tile);
    })
    ctx.state.moveMap[1].forEach(function(tile) {
      ctx.commit('RESET_TILE', tile);
    })
    ctx.commit('RESET_ACTIVE_CHAR');
  }
}
