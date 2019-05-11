<template>
  <div id="app">
    <Form
      id="insert_1020"
      label="Publicar anuncio"
      type="group"
    />
  </div>
</template>

<script>
import Form from './components/Form/index.vue'

export default {
  name: 'app',
  components: {
    Form
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
