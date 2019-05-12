import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    default: {},
    current: {}
  },
  mutations: {
    /**
     * Update form field
     * @param {object} state of store
     * @param {object} field to change
     * @returns {null} no return
     */
    updateField(state, field) {
      state[field.type] = {
        ...state[field.type],
        ...field
      }
    }
  },
  actions: {
    /**
     * Update form field
     * @param {object} context of store
     * @param {object} field to change
     * @returns {null} no return
     */
    updateField({ commit }, field) {
      commit('updateField', field)
    }
  }
})
