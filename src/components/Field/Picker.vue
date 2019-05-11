<template>
  <div>
    <p class="field-label">{{ label }}</p>
    <p v-if="hint" class="field-hint">{{ hint }}</p>
    <select name="id"></select>
  </div>
</template>

<script>
import Base from './Base.vue'
export default {
  name: 'Picker',
  extends: Base
}
</script>
