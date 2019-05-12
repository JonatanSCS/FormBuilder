import { mount } from '@vue/test-utils'
import Form from '@/components/Form/index.vue'

describe('Init component with defaults', () => {
  const wrapper = mount(Form, {
    propsData: {
      id: 'form_124',
      label: 'My Form form name',
      type: 'group'
    }
  })

  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('Display correct title', () => {
    const title = wrapper.find('h1')
    expect(title.text()).toBe('My Form form name')
  })
})
