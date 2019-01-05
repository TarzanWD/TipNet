import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import events from '@/modules/Events'
import users from '@/modules/Users'
import matches from '@/modules/Matches'
import matchDetail from '@/modules/MatchDetail'

Vue.use(Vuex)
axios.defaults.baseURL = 'https://api.tipnet.eu/api'

export default new Vuex.Store({
  modules: {
    events,
    users,
    matches,
    matchDetail
  }
})
