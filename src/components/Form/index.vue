<template>
  <div :formId="id">
    <h1 class="title">{{ label }}</h1>
    <component :is="`Form_${type}`"></component>
  </div>
</template>

<script>
import Group from './Group/index.vue'

export default {
  name: 'Form',
  components: {
    Form_group: Group
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      /**
       * Use for default value of Array type
       * @returns {array} An empty array
       */
      default: function defaultArray () {
        return []
      }
    }
  }
}
</script>
