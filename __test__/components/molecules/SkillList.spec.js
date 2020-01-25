import { mount } from '@vue/test-utils'
import SkillList from '@/components/molecules/SkillList.global.vue'

describe('SkillList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SkillList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
