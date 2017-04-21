import tools from '@/tools/tools.js';
import handleSpacebar from './events/spacebar.js';

export default {
  handleMove(ctx, e) {
    var self = this;
    if(ctx.state.menuActive) {
      // Menu is active
      var allOpts = [].slice.call(document.querySelectorAll('.option'));
      ctx.dispatch('removeActiveClasses');
      switch(e.keyCode) {
        case 38:
          // Move Up
          ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex - 1 >= 0 ? ctx.state.optsIndex - 1 : ctx.state.options.length - 1);
          allOpts[ctx.state.optsIndex].classList.add('active');
          break;
        case 40:
          // Move Down
          ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex + 1 < ctx.state.options.length ? ctx.state.optsIndex + 1 : 0);
          allOpts[ctx.state.optsIndex].classList.add('active');
          break;
        case 32:
          // Spacebar
          ctx.dispatch('handleOptions');
          break;
      }
    } else if(ctx.state.attacking) {
      // Weapon Menu is active
      const allWeapons = [].slice.call(document.querySelectorAll('.weapon'));
      if(allWeapons.length > 1) {
        ctx.commit('RESET_OPTS_INDEX');
        switch(e.keyCode) {
          case 38:
            // Move Up
            ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex - 1 >= 0 ? ctx.state.optsIndex - 1 : ctx.state.options.length - 1);
            allWeapons[ctx.state.optsIndex].classList.add('active');
            break;
          case 40:
            // Move Down
            ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex + 1 < ctx.state.options.length ? ctx.state.optsIndex + 1 : 0);
            allWeapons[ctx.state.optsIndex].classList.add('active');
            break;
          case 32:
            // Spacebar
            ctx.dispatch('handleOptions');
            break;
        }
      }
    } else {
      // Menu is not active
      var newCoords;
      switch(e.keyCode) {
        case 38:
          // Move Up
          newCoords = [e.coords[0] - 1 >= 0 ? e.coords[0] - 1 : e.coords[0], e.coords[1]];
          ctx.commit('MOVE', newCoords);
          break;
        case 40:
          // Move Down
          newCoords = [e.coords[0] + 1 <= 10 ? e.coords[0] + 1 : e.coords[0], e.coords[1]];
          ctx.commit('MOVE', newCoords);
          break;
        case 39:
          // Move Right
          newCoords = [e.coords[0], e.coords[1] + 1 <= 14 ? e.coords[1] + 1 : e.coords[1]];
          ctx.commit('MOVE', newCoords);
          break;
        case 37:
          // Move Left
          newCoords = [e.coords[0], e.coords[1] - 1 >= 0 ? e.coords[1] - 1 : e.coords[1]];
          ctx.commit('MOVE', newCoords);
          break;
        case 32:
          // Spacebar
          handleSpacebar(ctx);
          break;
      }
    }
  },
  removeActiveClasses(ctx) {
    [].slice.call(document.querySelectorAll('.option')).forEach(function(option) {
      if(option.classList) {
        option.classList.remove('active');
      } else {
        var name = 'active';
        option.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
      }
    });
  },
  handleOptions(ctx) {
    switch(ctx.state.options[ctx.state.optsIndex]) {
      case 'Attack':
        console.log('Attack Chosen');
        ctx.dispatch('setLocalAttackTiles');
        break;
      case 'Rescue':
        console.log('Rescue Chosen');
        break;
      case 'Item':
        console.log('Item Chosen');
        break;
      case 'Trade':
        console.log('Trade Chosen');
        break;
      case 'Wait':
        console.log('Wait Chosen');
        ctx.dispatch('endCharTurn');
        break;
    }
    ctx.commit('SET_OPTS_INDEX', 0);
  },
  setActiveChar(ctx, tile) {
    ctx.commit('SET_ACTIVE_CHAR', tile.char);
  },
  resetActiveChar(ctx, tile) {
    ctx.commit('RESET_ACTIVE_CHAR');
  },
  endCharTurn(ctx) {
    // remove move map and active char
    ctx.commit('END_MOVE');
    // remove char from char que
    ctx.commit('END_CHAR_TURN');
    // reset activeChar
    ctx.commit('RESET_ACTIVE_CHAR');
    // reset user menu
    ctx.commit('DEACTIVATE_MENU');
    // check if characters are left in que
    if(ctx.state.charQue.length === 0) {
      // end player turn
      console.log('Player Turn Ended');
      ctx.commit('START_ENEMY_PHASE');
    }
  },
  startEnemyActions(ctx) {
    // init enemy AI
    ctx.commit('START_PLAYER_PHASE');
  },
  removeSpecialTiles(ctx) {
    ctx.commit('END_MOVE');
  },
  displayMoveMap(ctx) {
    // Register map
    ctx.commit('SET_MOVE_TILES');
  },
  getOptions(ctx) {
    // Looking for two things
    // if enemies are close enough to attack
    if(ctx.getters.actionList.length > 0) {
      ctx.commit('ADD_ATTACK_OPTION');
      ctx.commit('SET_ATTACK_LIST', ctx.getters.actionList);
    }
    // if heroes are close enough to rescue/trade
    // if(ctx.getters.actionList[1] > 0) {
    //   ctx.commit('ADD_RESCUE_OPTION');
    //   ctx.commit('ADD_TRADE_OPTION');
    // }
  },
  setLocalAttackTiles(ctx) {
    ctx.getters.actionList.forEach(function(tile) {
      ctx.commit('SET_LOCAL_ATK_TILE', tile);
    })
    ctx.commit('DEACTIVATE_MENU');
  }
}
