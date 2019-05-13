<template>
  <div>
    <component
      v-for="field in fields"
      :key="field.id"
      :is="`Field_${field.type}`"
      v-bind="field"
    />
  </div>
</template>

<script>
import Base from './Base.vue'
import Picker from '@/components/Field/Picker.vue'
import FieldSet from '@/components/Field/FieldSet.vue'

export default {
  name: 'GroupForm',
  extends: Base,
  props: {
    params: {
      type: Object
    }
  },
  components: {
    Field_picker: Picker,
    Field_fieldSet: FieldSet
  }
}
</script>
