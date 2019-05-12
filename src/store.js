import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fields: [],
    rules: []

  },
  mutations: {
    /**
     * Update fields field
     * @param {object} state of store
     * @param {object} fields to change
     * @returns {null} no return
     */
    updateFields(state, fields) {
      state.fields = fields
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
      if (field.parent) {
        const positionParent = state.fields.findIndex(item => item.id === field.parent)
        fieldsToFind = state.fields[positionParent].fields
      }
      const itemToChange = fieldsToFind.find(item => item.id === field.id)
      Object.assign(itemToChange, field.data);
    }
  },
  actions: {
    /**
     * Update fields field
     * @param {object} context of store
     * @param {object} fields to set
     * @returns {null} no return
     */
    updateFields({ commit }, fields) {
      commit('updateFields', fields)
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
