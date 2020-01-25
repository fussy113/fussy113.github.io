import { mount } from '@vue/test-utils'
import TheNavbar from '@/components/organisms/TheNavbar.vue'

describe('TheNavbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TheNavbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
