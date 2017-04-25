// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})

// function update(progress) {
//   // update state
// }
//
// function render() {
//   // update store
// }
//
// function loop() {
//   const ts = Date.now();
//   const progress = ts - lastRender;
//
//   update(progress);
//   render();
//
//   lastRender = ts;
//   window.requestAnimationFrame(loop);
// }
//
// let lastRender = 0;
// window.requestAnimationFrame(loop);
