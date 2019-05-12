<template>
  <div id="app">
    <Form
      id="insert_1020"
      label="Publicar anuncio"
      type="group"
    />
    <Picker
      id="subject"
      type="text"
      label="Título"
      display="text"
      hint="Escribe un título"
      required
      disabled
    />
  </div>
</template>

<script>
import Form from './components/Form/index.vue'
import Picker from './components/Field/Picker.vue'

export default {
  name: 'app',
  components: {
    Form,
    Picker
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
