import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [],
    rules: [],
    form: {
      id: 'insert_1020'
    }
  },
  mutations: {
    /**
     * Update fields
     * @param {object} state of store
     * @param {object} fields to change
     * @returns {null} no return
     */
    updateFields(state, fields) {
      state.fields = fields
    },
    /**
     * Update rules
     * @param {object} state of store
     * @param {object} rules (only set one time)
     * @returns {null} no return
     */
    updateRules(state, rules) {
      state.rules = rules
    },
    /**
     * Update fields field
     * Search for field to change and assign new value
     * @param {object} state of store
     * @param {object} field to change
     * @returns {null} no return
     */
    updateField(state, field) {
      let fieldsToFind = state.fields
      let itemToChange = fieldsToFind.find(item => item.id === field.id)
      // if (field.parent) {
      //   const positionParent = state.fields.findIndex(item => item.id === field.parent)
      //   itemToChange = state.fields[positionParent].fields.find(item => item.id === field.id)
      // }
      Object.assign(itemToChange, field.data)
      state.fields = fieldsToFind
    }
  },
  actions: {
    /**
     * Update fields
     * @param {object} context of store
     * @param {object} fields to set
     * @returns {null} no return
     */
    updateFields({ commit }, fields) {
      commit('updateFields', fields)
    },
    /**
     * Update rules
     * @param {object} context of store
     * @param {object} rules to set
     * @returns {null} no return
     */
    updateRules({ commit }, rules) {
      commit('updateRules', rules)
    },
    /**
     * Update fields field
     * @param {object} context of store
     * @param {object} field to set
     * @returns {null} no return
     */
    updateField({ commit }, field) {
      commit('updateField', field)
    }
  }
})
