import tools from '@/tools/tools.js';
import handleSpacebar from './events/spacebar.js';

export default {
  handleMove(ctx, e) {
    var newCoords;
    if(e.keyCode === 38) {
      // move up
      newCoords = [e.coords[0] - 1 >= 0 ? e.coords[0] - 1 : e.coords[0], e.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 40) {
      // move down
      newCoords = [e.coords[0] + 1 <= 10 ? e.coords[0] + 1 : e.coords[0], e.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 39) {
      // move right
      newCoords = [e.coords[0], e.coords[1] + 1 <= 15 ? e.coords[1] + 1 : e.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 37) {
      // move left
      newCoords = [e.coords[0], e.coords[1] - 1 >= 0 ? e.coords[1] - 1 : e.coords[1]];
      ctx.commit('MOVE', newCoords);
    } else if(e.keyCode === 32) {
      // spacebar
      handleSpacebar(ctx);
    }
  },
  setActiveTile(ctx, tile) {
    ctx.commit('SET_ACTIVE_TILE', tile);
  },
  setSelectedChar(ctx, tile) {
    ctx.commit('SET_SELECTED_CHAR', tile.char);
  },
  resetSelectedChar(ctx, tile) {
    ctx.commit('RESET_SELECTED_CHAR');
  },
  setActiveChar(ctx, tile) {
    ctx.commit('SET_ACTIVE_CHAR', tile.char);
  },
  resetActiveChar(ctx, tile) {
    ctx.commit('RESET_ACTIVE_CHAR');
  }
}
