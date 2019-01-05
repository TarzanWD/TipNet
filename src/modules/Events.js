import axios from 'axios'
import api from '@/services/api'

const SET_EVENTS_STATE_START = 'SET_EVENTS_STATE_START'
const SET_EVENTS_STATE_ERROR = 'SET_EVENTS_STATE_ERROR'
const SET_EVENTS_STATE_SUCCESS = 'SET_EVENTS_STATE_SUCCESS'

export default {
  namespaced: true,
  state: {
    events: [],
    loading: false,
    error: null
  },
  mutations: {
    [SET_EVENTS_STATE_START]: (state) => {
      state.loading = true
    },
    [SET_EVENTS_STATE_ERROR]: (state, error) => {
      state.loading = false
      state.error = error
    },
    [SET_EVENTS_STATE_SUCCESS]: (state, events) => {
      state.events = events
      state.loading = false
    }
  },
  actions: {
    loadEvents ({ commit }) {
      api({
        request: () => axios.get('/Event'),
        startCb: () => commit(SET_EVENTS_STATE_START),
        successCb: (response) => commit(SET_EVENTS_STATE_SUCCESS, response.data),
        errorCb: (error) => commit(SET_EVENTS_STATE_ERROR, error.message)
      })
    }
  },
  getters: {
    getState (state) {
      return state
    }
  }
}
