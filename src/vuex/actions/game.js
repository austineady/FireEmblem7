export default function({ dispatch }, action, arg) {
  switch(action) {
    case 'SET_MAP':
      dispatch('SET_MAP');
      return;
    case 'REGISTER':
      dispatch('REGISTER');
      return;
    case 'SET_CHARACTERS':
      dispatch('SET_CHARACTERS');
      return;
    case 'BEGIN_PLAYER_PHASE':
      dispatch('BEGIN_PLAYER_PHASE');
      return;
    case 'BEGIN_ENEMY_PHASE':
      dispatch('BEGIN_ENEMY_PHASE');
      return;
    case 'BEGIN_ALLY_PHASE':
      dispatch('BEGIN_ALLY_PHASE');
      return;
    case 'BEGIN_NEXT_TURN':
      dispatch('BEGIN_NEXT_TURN');
      return;
    case 'SET_HOVER':
      dispatch('SET_HOVER');
      return;
    case 'REMOVE_HOVER':
      dispatch('REMOVE_HOVER');
      return;
    case 'SET_ACTIVE':
      dispatch('SET_ACTIVE');
      return;
    case 'REMOVE_ACTIVE':
      dispatch('REMOVE_ACTIVE');
      return;
  }
}
