<script>
export default {
  name: 'Field',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    display: {
      type: String,
      required: true
    },
    hint: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
