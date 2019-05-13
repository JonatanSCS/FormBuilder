<template>
  <div>
    <p class="field-label">{{ label }}</p>
    <p v-if="hint" class="field-hint">{{ hint }}</p>
    <select :name="id" :disabled="disabled" @change="handleChange" :value="value">
      <option value="">Selecciona</option>
      <template v-for="data in datalist">
        <option :key="data.value" :value="data.value">{{ data.text }}</option>
      </template>
    </select>
  </div>
</template>

<script>
import Base from './Base.vue'
export default {
  name: 'Picker',
  extends: Base
}
</script>
