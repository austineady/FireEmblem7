import tools from '@/tools/tools.js';

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
      } else if(ctx.state.activeChar !== null) {
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
  setMap(ctx, arg) {
    ctx.commit('SET_MAP', arg);
  },
  registerCharacter(ctx, character) {
    if(this.getters.isValid(character)) {
      ctx.commit('REGISTER', {
        row: character.row,
        col: character.col,
        prop: 'char',
        val: character
      });
    }
  },
  unregisterCharacter(ctx, character) {
    if(this.getters.isValid(character)) {
      ctx.commit('UNREGISTER', {
        row: character.row,
        col: character.col,
        prop: 'char',
        val: null
      })
    }
  },
  registerMoveTile(ctx, tile) {
    if(this.getters.isValid(tile)) {
      ctx.commit('REGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'moveTile',
        val: true
      })
    }
  },
  unregisterMoveTile(ctx, tile) {
    if(this.getters.isValid(tile)) {
      ctx.commit('UNREGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'moveTile',
        val: false
      })
    }
  },
  registerAtkTile(ctx, tile) {
    if(this.getters.isValid(tile)) {
      ctx.commit('REGISTER', {
        row: tile.row,
        col: tile.col,
        prop: 'atkTile',
        val: true
      })
    }
  },
  unregisterAtkTile(ctx, tile) {
    if(this.getters.isValid(tile)) {
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
