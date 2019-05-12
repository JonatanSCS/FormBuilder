<template>
  <div id="app">
    <Form
      :id="form.id"
      :label="form.label"
      :type="form.type"
      :fields="form.fields"
    />
  </div>
</template>

<script>
import Form from './components/Form/index.vue'

import response from './response'

export default {
  name: 'app',
  components: {
    Form
  },
  /**
   * Created used for:
   * Save form response to prop
   * @returns {null} return 0
   */
  created() {
    this.form = response.form

    return null
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
