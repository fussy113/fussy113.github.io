import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProfileIntro from '../ProfileIntro.vue'

describe('ProfileIntro', () => {
  it('renders properly', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.profile-intro').exists()).toBe(true)
  })

  it('displays profile name', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.profile-name').text()).toBe('fussy113')
  })

  it('displays profile title', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.profile-title').text()).toBe('Web Engineer')
  })


  it('displays avatar placeholder', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.avatar-placeholder').exists()).toBe(true)
    expect(wrapper.find('.avatar-text').text()).toBe('fussy113')
  })

  it('includes SocialLinks component', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.social-section').exists()).toBe(true)
  })

  it('has proper section structure', () => {
    const wrapper = mount(ProfileIntro)
    
    expect(wrapper.find('.profile-header').exists()).toBe(true)
    expect(wrapper.find('.profile-content').exists()).toBe(true)
    expect(wrapper.find('.profile-avatar').exists()).toBe(true)
    expect(wrapper.find('.profile-info').exists()).toBe(true)
    expect(wrapper.find('.social-section').exists()).toBe(true)
  })
})