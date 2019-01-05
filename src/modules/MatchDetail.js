import axios from 'axios'
import api from '@/services/api'

const SET_MATCH_DETAIL_STATE_START = 'SET_MATCH_DETAIL_STATE_START'
const SET_MATCH_DETAIL_STATE_SUCCESS = 'SET_MATCH_DETAIL_STATE_SUCCESS'
const SET_MATCH_DETAIL_STATE_ERROR = 'SET_MATCH_DETAIL_STATE_ERROR'

export default {
  state: {
    match: {},
    loading: false,
    error: null
  },
  mutations: {
    [SET_MATCH_DETAIL_STATE_START]: (state) => {
      state.loading = true
    },
    [SET_MATCH_DETAIL_STATE_SUCCESS]: (state, match) => {
      state.loading = false
      state.match = match
    },
    [SET_MATCH_DETAIL_STATE_ERROR]: (state, error) => {
      state.loading = false
      state.error = error
    }
  },
  actions: {
    loadMatchDetail ({ commit }, { matchId, userId = null }) {
      let query = `/Match/detail?id=${matchId}`
      if (userId) {
        query = `/Match/detail?id=${matchId}&userId=${userId}`
      }

      api({
        request: () => axios.get(query),
        startCb: () => commit(SET_MATCH_DETAIL_STATE_START),
        successCb: (response) => commit(SET_MATCH_DETAIL_STATE_SUCCESS, response.data),
        errorCb: (error) => commit(SET_MATCH_DETAIL_STATE_ERROR, error.message)
      })
    }
  },
  getters: {
    getState (state) {
      return state
    }
  }
}
