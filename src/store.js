import Vue from 'vue'
import Vuex from 'vuex'
// app service for requests
import appService from '@/app.service'
// modules
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fixtures: [],
    renderedFixtures: [],
    fixturesShown: 0
  },
  mutations: {
    addFixtures (state, payload) {
      state.fixtures.push(...payload.fixtures)
    },
    filterFixturesByRule (state, payload) {
      let today = new Date()
      switch (payload.rule) {
        case 'played':
          state.renderedFixtures = state.fixtures
            .filter(match => new Date(match.date) < today)
            .slice(0, state.fixturesShown)
          break
        case 'unplayed':
          state.renderedFixtures = state.fixtures
            .filter(match => new Date(match.date) > today)
            .slice(0, state.fixturesShown)
          break
      }
    },
    renderFixtures (state) {
      state.fixturesShown += 10
      state.renderedFixtures = state.fixtures.slice(0, state.fixturesShown)
    }
  },
  actions: {
    getFixtures ({commit}) {
      appService.getFixtures()
        .then(data => {
          commit('addFixtures', {
            fixtures: data.reverse()
          })
          commit('renderFixtures')
        })
    }
  }
})
