import Vue from 'vue';
import Vuex from 'vuex';

import game from './store/game';
import map from './store/map';
import selector from './store/selector';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    map,
    selector
  },
  strict: true
});
