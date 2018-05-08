import Vue from 'vue'
import Router from 'vue-router'
import Hub from '@/views/Hub.vue'
import Matches from '@/views/Matches.vue'
import Table from '@/views/Table.vue'
import Rules from '@/views/Rules.vue'
import Discussion from '@/views/Discussion.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
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
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/discussion',
      name: 'discussion',
      component: Discussion
    }
  ]
})
