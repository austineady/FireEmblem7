export default function handleSpacebar(ctx) {
  if(!ctx.state.menuActive || !ctx.state.attacking) {
    // Menu Inactive
    if(ctx.state.selectedChar !== null && ctx.state.charQue.indexOf(ctx.state.selectedChar.id) > -1 && ctx.state.activeChar === null) {
      // if a char is selected, char hasn't been selected yet, and no char is active
      // Set character as active
      ctx.commit('SET_ACTIVE_CHAR', ctx.state.selectedChar);
      // Get character move map
      // console.log(ctx.state.selectedChar.moveMap);
      // var moveMap = ctx.state.activeChar.moveMap;
      ctx.commit('BEGIN_MOVE');
      ctx.dispatch('displayMoveMap');
    } else if(ctx.state.activeTile.moveTile === true && ctx.state.selectedChar === null && ctx.state.activeChar !== null && ctx.getters.actionList.length === 0) {
      // if tile has no char, a char is active, and no enemies are attackable
      // character position move
      ctx.commit('MOVE_CHAR');
      ctx.dispatch('removeSpecialTiles');
      // select char under selector
      ctx.commit('SET_SELECTED_CHAR', ctx.state.activeChar);
      ctx.dispatch('getOptions');
      // Active User Menu
      ctx.commit('ACTIVATE_MENU');
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
      ctx.commit('BEGIN_ATTACK');
    }
  } else if(ctx.state.attacking) {
    // weapon selected, show battle compare
  }
}
