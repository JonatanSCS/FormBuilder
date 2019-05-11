/**
 * Give component name by form type
 * @param {string} type Type of form
 * @returns {string} The component name
 */
export const computeTypeForm = type => {
  switch (type) {
  case 'group':
    return 'Group'
  default:
    return 'Generic'
  }
}
