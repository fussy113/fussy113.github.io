import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconZenn from '../icons/IconZenn.vue'

describe('IconZenn', () => {
  it('renders properly', () => {
    const wrapper = mount(IconZenn)
    
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct SVG attributes', () => {
    const wrapper = mount(IconZenn)
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
    expect(svg.attributes('fill')).toBe('currentColor')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('contains path element', () => {
    const wrapper = mount(IconZenn)
    
    expect(wrapper.find('svg path').exists()).toBe(true)
  })

  it('has Zenn-specific path data', () => {
    const wrapper = mount(IconZenn)
    const path = wrapper.find('svg path')
    
    expect(path.attributes('d')).toContain('M.264 23.771h4.984c.264')
  })
})