import tools from '@/tools/tools.js';
import handleSpacebar from './events/spacebar.js';

export default {
  handleMove(ctx, e) {
    var newCoords;
    var self = this;
    if(ctx.state.menuActive) {
      var allOpts = [].slice.call(document.querySelectorAll('.option'));
      ctx.dispatch('removeActiveClasses');
    }
    if(e.keyCode === 38) {
      // Move Up
      if(!ctx.state.menuActive) {
        // Menu is not active
        newCoords = [e.coords[0] - 1 >= 0 ? e.coords[0] - 1 : e.coords[0], e.coords[1]];
        ctx.commit('MOVE', newCoords);
      } else {
        ctx.dispatch('removeActiveClasses');
        ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex - 1 >= 0 ? ctx.state.optsIndex - 1 : ctx.state.options.length - 1);
        allOpts[ctx.state.optsIndex].classList.add('active');
      }
    } else if(e.keyCode === 40) {
      // move down
      if(!ctx.state.menuActive) {
        // Menu inactive
        newCoords = [e.coords[0] + 1 <= 10 ? e.coords[0] + 1 : e.coords[0], e.coords[1]];
        ctx.commit('MOVE', newCoords);
      } else {
        ctx.dispatch('removeActiveClasses', allOpts);
        ctx.commit('SET_OPTS_INDEX', ctx.state.optsIndex + 1 < ctx.state.options.length ? ctx.state.optsIndex + 1 : 0);
        allOpts[ctx.state.optsIndex].classList.add('active');
      }
    } else if(e.keyCode === 39) {
      // move right
      if(!ctx.state.menuActive) {
        newCoords = [e.coords[0], e.coords[1] + 1 <= 15 ? e.coords[1] + 1 : e.coords[1]];
        ctx.commit('MOVE', newCoords);
      }
    } else if(e.keyCode === 37) {
      // move left
      if(!ctx.state.menuActive) {
        newCoords = [e.coords[0], e.coords[1] - 1 >= 0 ? e.coords[1] - 1 : e.coords[1]];
        ctx.commit('MOVE', newCoords);
      }
    } else if(e.keyCode === 32) {
      // spacebar
      if(!ctx.state.menuActive) {
        handleSpacebar(ctx);
      } else {
        ctx.dispatch('handleOptions');
      }
    }
  },
  removeActiveClasses(ctx, allOpts) {
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
    var self = this;
    switch(ctx.state.options[ctx.state.optsIndex]) {
      case 'Attack':
        console.log('Attack Chosen');
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
  },
  endCharTurn(ctx) {
    // remove move map and active char
    ctx.state.moveMap[0].forEach(function(tile) {
      ctx.commit('RESET_TILE', tile);
    })
    ctx.state.moveMap[1].forEach(function(tile) {
      ctx.commit('RESET_TILE', tile);
    })
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
  }
}
