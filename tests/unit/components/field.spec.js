import { mount } from '@vue/test-utils'
import Picker from '@/components/Field/Picker.vue'

describe('Init component with default', () => {
  const wrapper = mount(Picker, {
    propsData: {
      id: 'subject',
      type: 'text',
      label: 'Título',
      display: 'text'
    }
  })

  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('Display correct label and hide hint', () => {
    const label = wrapper.find('.field-label')
    expect(label.text()).toBe('Título')
    expect(wrapper.contains('.field-hint')).toBe(false)
  })
})

describe('Init component with props', () => {
  const wrapper = mount(Picker, {
    propsData: {
      id: 'subject',
      type: 'text',
      label: 'Título',
      display: 'text',
      hint: 'Escribe un título',
      required: true,
      disabled: true
    }
  })

  test('Hint is show if exist with text', () => {
    expect(wrapper.contains('.field-hint')).toBe(true)
  })
})


describe('Init Picker component', () => {
  const wrapper = mount(Picker, {
    propsData: {
      id: 'region',
      type: 'picker',
      label: 'Estado',
      display: 'picker',
      hint: 'Selecciona estado',
    }
  })

  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})
