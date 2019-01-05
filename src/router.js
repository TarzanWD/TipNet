import Vue from 'vue'
import Router from 'vue-router'
import Hub from '@/views/Hub.vue'
import Event from '@/views/Event.vue'
import Matches from '@/views/Matches.vue'
import Table from '@/views/Table.vue'
import Rules from '@/views/Rules.vue'
import Discussion from '@/views/Discussion.vue'
import Profile from '@/views/Profile.vue'
import NotFound from '@/views/NotFound.vue'
import Detail from '@/views/Detail.vue'
import NewRoom from '@/views/NewRoom.vue'
import FindRoom from '@/views/FindRoom'
import RoomDetail from '@/views/RoomDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/event/:id',
      name: 'event',
      component: Event
    },
    {
      path: '/event/:id/matches',
      name: 'matches',
      component: Matches
    },
    {
      path: '/event/:id/table',
      name: 'table',
      component: Table
    },
    {
      path: '/event/:id/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '/event/:id/discussion',
      name: 'discussion',
      component: Discussion
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/event/:id/detail/:matchId',
      name: 'detail',
      component: Detail
    },
    {
      path: '/new-room',
      name: 'new-room',
      component: NewRoom
    },
    {
      path: '/find-room',
      name: 'find-room',
      component: FindRoom
    },
    {
      path: '/room-detail/:id',
      name: 'room-detail',
      component: RoomDetail
    },
    {
      path: '/',
      name: 'hub',
      component: Hub
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
