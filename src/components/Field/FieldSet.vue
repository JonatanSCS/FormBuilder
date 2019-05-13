<template>
  <div>
    <p class="field-label">{{ label }}</p>
    <p v-if="hint" class="field-hint">{{ hint }}</p>
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
import Picker from './Picker.vue'
import FieldSet from './FieldSet.vue'

export default {
  name: 'FieldSet',
  extends: Base,
  components: {
    Field_picker: Picker,
    Field_fieldSet: FieldSet
  }
}
</script>
