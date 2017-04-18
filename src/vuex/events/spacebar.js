import tools from '@/tools/tools.js';

export default function handleSpacebar(ctx) {
  if(!ctx.state.menuActive) {
    // Menu Inactive
    if(ctx.state.selectedChar !== null && ctx.state.charQue.indexOf(ctx.state.selectedChar.id) > -1 && ctx.state.activeChar === null) {
      // Set character as active
      ctx.commit('SET_ACTIVE_CHAR', ctx.state.selectedChar);
      // Get character move map
      var moveMap = tools.calculateMove(ctx.state.coords, ctx.state.map);
      ctx.commit('BEGIN_MOVE');
      ctx.commit('SET_MOVE_MAP', moveMap);
      ctx.dispatch('displayMoveMap', moveMap);
    } else if(ctx.state.selectedChar === null && ctx.state.activeChar !== null && ctx.getters.actionList.length === 0) {
      // character position move
      if(ctx.state.activeTile.moveTile === true) {
        ctx.commit('MOVE_CHAR');
        ctx.dispatch('removeSpecialTiles');
        // Set character as active
        ctx.commit('SET_SELECTED_CHAR', ctx.state.activeChar);
        ctx.dispatch('getOptions');
        // Active User Menu
        ctx.commit('ACTIVATE_MENU');
      }
    } else if(ctx.state.selectedChar === null && ctx.state.activeChar !== null && ctx.getters.actionList.length > 0) {
      // character position move
      if(ctx.state.activeTile.moveTile === true) {
        ctx.commit('MOVE_CHAR');
        ctx.dispatch('removeSpecialTiles');
        // Set character as active
        ctx.commit('SET_SELECTED_CHAR', ctx.state.activeChar);
        ctx.dispatch('getOptions');
        // Active User Menu
        ctx.commit('ACTIVATE_MENU');
      }
    } else if(ctx.state.selectedChar.id === ctx.state.activeChar.id) {
      // remove move map and active char
      ctx.dispatch('removeSpecialTiles');
      ctx.commit('RESET_ACTIVE_CHAR');
    } else if(ctx.state.activeChar !== null && ctx.state.selectedChar !== null && ctx.state.selectedChar.type === 'enemy' && ctx.state.atkList.length > 0 && ctx.state.activeTile.atkTile) {
      // start attack sequence
      console.log('Start attack');
    }
  }
}
