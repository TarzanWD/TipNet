import Vue from 'vue'
import Router from 'vue-router'
import Hub from '@/views/Hub.vue'
import Matches from '@/views/Matches.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'hub',
      component: Hub
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches
    }
  ]
})
