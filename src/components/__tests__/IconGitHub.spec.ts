import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconGitHub from '../icons/IconGitHub.vue'

describe('IconGitHub', () => {
  it('renders properly', () => {
    const wrapper = mount(IconGitHub)
    
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct SVG attributes', () => {
    const wrapper = mount(IconGitHub)
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
    expect(svg.attributes('fill')).toBe('currentColor')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('contains path element', () => {
    const wrapper = mount(IconGitHub)
    
    expect(wrapper.find('svg path').exists()).toBe(true)
  })

  it('has GitHub-specific path data', () => {
    const wrapper = mount(IconGitHub)
    const path = wrapper.find('svg path')
    
    expect(path.attributes('d')).toContain('M12 0C5.374 0 0 5.373')
  })
})