<template>
  <div id="app">
    <component
      :id="form.id"
      :label="form.label"
      :type="form.type"
      :is="`Form_${form.type}`"
      :fields="$store.state.fields"
    />
  </div>
</template>

<script>
import Group from './components/Form/Group.vue'

import response from './response'

export default {
  name: 'app',
  components: {
    Form_group: Group
  },
  /**
   * Created used for:
   * Save form response to prop
   * @returns {null} no return
   */
  created() {
    const { id, label, type, fields } = this.mutateForm(response.form)
    this.form = { id, label, type }
    this.$store.dispatch('updateFields', fields)
  },
  methods: {
    /**
     * Mutate form just for better rules access
     * @param {object} form by service response
     * @returns {object} new form with rules mutated
     */
    mutateForm(form) {
      const mutateRes = form.rules
      let newRules = {}
      Object.keys(mutateRes).forEach(affected => {
        mutateRes[affected].forEach(rule => {
          rule.when.forEach(when => {
            let newRule = [{ ...when, id: affected, ...rule.then }]

            if (newRules[when.id]) {
              newRule = [...newRules[when.id], ...newRule]
            }

            newRules = { ...newRules, [when.id]: newRule }
          })
        })
      })
      form.rules = newRules
      return form
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
