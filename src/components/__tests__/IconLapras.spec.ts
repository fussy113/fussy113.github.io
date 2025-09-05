import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconLapras from '../icons/IconLapras.vue'

describe('IconLapras', () => {
  it('renders properly', () => {
    const wrapper = mount(IconLapras)
    
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct SVG attributes', () => {
    const wrapper = mount(IconLapras)
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
    expect(svg.attributes('fill')).toBe('currentColor')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('contains path element', () => {
    const wrapper = mount(IconLapras)
    
    expect(wrapper.find('svg path').exists()).toBe(true)
  })

  it('has Lapras-specific path data', () => {
    const wrapper = mount(IconLapras)
    const path = wrapper.find('svg path')
    
    expect(path.attributes('d')).toContain('M12 2L2 7l10 5 10-5-10-5z')
  })
})