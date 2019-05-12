<script>
export default {
  name: 'BaseForm',
  props: {
    title: {
      type: String,
      require: true
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
