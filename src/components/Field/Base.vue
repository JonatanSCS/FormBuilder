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
    },
    fields: {
      type: Array,
      default: defaultArray
    },
    datalist: {
      type: Array,
      default: defaultArray
    },
    constraints: {
      type: Array,
      default: defaultArray
    },
    parent: {
      type: String,
      default: ''
    }
  },
  methods: {
    /**
     * Handle field change
     * @param {event} event of field changed
     * @returns {null} no return
     */
    // handleChange(event) {
    //   const { name, value } = event.target
    // }
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
