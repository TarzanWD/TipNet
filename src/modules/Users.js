import axios from 'axios'
import api from '@/services/api'

const SET_USERS_STATE_START = 'SET_USERS_STATE_START'
const SET_USERS_STATE_SUCCESS = 'SET_USERS_STATE_SUCCESS'
const SET_USERS_STATE_ERROR = 'SET_USERS_STATE_ERROR'

export default {
  state: {
    users: [],
    loading: false,
    error: null
  },
  mutations: {
    [SET_USERS_STATE_START]: (state) => {
      state.loading = true
    },
    [SET_USERS_STATE_SUCCESS]: (state, users) => {
      state.loading = false
      state.users = users
    },
    [SET_USERS_STATE_ERROR]: (state, error) => {
      state.loading = false
      state.error = error
    }
  },
  actions: {
    loadUsers ({ commit }, { userId = null, eventId }) {
      let query = `/User?eventId=${eventId}`
      if (userId) {
        query = `/User?eventId=${eventId}&userId=${userId}`
      }

      api({
        request: () => axios.get(query),
        startCb: () => commit(SET_USERS_STATE_START),
        successCb: (response) => commit(SET_USERS_STATE_SUCCESS, response.data),
        errorCb: (error) => commit(SET_USERS_STATE_ERROR, error.message)
      })
    }
  }
}
