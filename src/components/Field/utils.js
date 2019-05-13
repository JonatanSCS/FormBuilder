import axios from 'axios'
/**
  * Base service URL
  * @param {string} field name to search
  * @returns {string} complete url
  */
const BASE_URL = field => `https://webapi.smmx.in/formbuilder/fieldrules/${field}`

/**
  * Choose function by operator
  * @param {object} rule of field to evaluate
  * @param {object} field that change
  * @param {string} formId of form
  * @return {Promise} returned by operator function
  */
export const evaluateRule = (rule, field, formId) => {
  return operatorFunctions[rule.operator](rule, field, formId)
}

/**
 * Aply change rule
 * @param {object} rule of field to evaluate
 * @param {object} field that change
 * @param {string} formId of form
 * @returns {Promise} Axiocs promise after call service
 */
const changeOperator = (rule, field, formId) => {
  const { id } = rule
  return axios.get(BASE_URL(id), {
    params: {
      form_id: formId,
      [field.id]: field.value
    }
  })
}

const operatorFunctions = {
  CHANGED: changeOperator
}
