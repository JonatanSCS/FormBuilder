<script>
import { evaluateRule } from './utils'

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
    value: {
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
    handleChange(event) {
      const { name, value } = event.target
      const formId = this.$store.state.form.id
      const field = { id: name, data: { value } }
      this.$store.dispatch('updateField', field)
      const rules = this.$store.state.rules
      if (rules[this.id]) {
        rules[this.id].forEach(rule => {
          this.applyRule(rule, { id: name, value }, formId)
        })
      }
    },
    /**
     * Evalueate rule by fields and operator
     * @param {object} rule to be evaluated
     * @param {object} field to aply rule
     * @param {string} formId of form
     * @returns {null} no return
     */
    applyRule(rule, field, formId) {
      const fieldToChange = { id: rule.id, data: rule.data }
      this.$store.dispatch('updateField', fieldToChange)
      evaluateRule(rule, field, formId)
        .then(({ data }) => {
          fieldToChange.data = data
          this.$store.dispatch('updateField', fieldToChange)
        })
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
