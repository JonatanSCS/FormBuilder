<template>
  <div :formId="id">
    <h1 class="title">{{ label }}</h1>
    <component :is="form"></component>
  </div>
</template>

<script>
import Generic from './Generic/index.vue'
import Group from './Group/index.vue'

import { computeTypeForm } from './utils'

export default {
  name: 'Form',
  components: {
    Generic,
    Group
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
      default: 'generic'
    },
    fields: {
      type: Array,
      default: defaultArray
    },
    form: {
      type: String,
      /**
       * Use for default form prop value
       * @returns {string} Computed by computeTypeForm util
       */
      default () {
        return computeTypeForm(this.type)
      }
    }
  }
}

/**
 * Use for default value of Array type
 * @returns {array} An empty array
 */
function defaultArray () {
  return []
}

</script>
