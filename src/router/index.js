import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/core/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    }
  ]
})
