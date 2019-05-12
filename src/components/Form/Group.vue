<template>
  <div>
    <template v-for="field in fields">
      <component
        :key="field.id"
        :is="`Field_${field.type}`"
        v-bind="field"
      />
    </template>
  </div>
</template>

<script>
import Base from './Base.vue'
import Picker from '@/components/Field/Picker.vue'
import FieldSet from '@/components/Field/FieldSet.vue'

export default {
  name: 'GroupForm',
  extends: Base,
  components: {
    Field_picker: Picker,
    Field_fieldSet: FieldSet
  }
}
</script>
