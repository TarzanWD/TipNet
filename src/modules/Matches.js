import axios from 'axios'
import api from '@/services/api'

const SET_MATCHES_STATE_START = 'SET_MATCHES_STATE_START'
const SET_MATCHES_STATE_SUCCESS = 'SET_MATCHES_STATE_SUCCESS'
const SET_MATCHES_STATE_ERROR = 'SET_MATCHES_STATE_ERROR'

export default {
  namespaced: true,
  state: {
    matches: [],
    error: null,
    loading: false
  },
  mutations: {
    [SET_MATCHES_STATE_SUCCESS]: (state, matches) => {
      state.matches = matches
      state.loading = false
    },
    [SET_MATCHES_STATE_START]: (state) => {
      state.loading = true
    },
    [SET_MATCHES_STATE_ERROR]: (state, error) => {
      state.loading = false
      state.error = error
    }
  },
  actions: {
    loadMatches ({ commit }, { userId = null, eventId }) {
      let query = `/Match?eventId=${eventId}`
      if (userId) {
        query = `/Match?eventId=${eventId}&userId=${userId}`
      }

      api({
        request: () => axios.get(query),
        startCb: () => commit(SET_MATCHES_STATE_START),
        successCb: (response) => commit(SET_MATCHES_STATE_SUCCESS, response.data),
        errorCb: (error) => commit(SET_MATCHES_STATE_ERROR, error.message)
      })
    }
  },
  getters: {
    getState (state) {
      return state
    }
  }
}
