import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IconQiita from '../icons/IconQiita.vue'

describe('IconQiita', () => {
  it('renders properly', () => {
    const wrapper = mount(IconQiita)
    
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('has correct SVG attributes', () => {
    const wrapper = mount(IconQiita)
    const svg = wrapper.find('svg')
    
    expect(svg.attributes('width')).toBe('20')
    expect(svg.attributes('height')).toBe('20')
    expect(svg.attributes('fill')).toBe('currentColor')
    expect(svg.attributes('viewBox')).toBe('0 0 24 24')
  })

  it('contains path element', () => {
    const wrapper = mount(IconQiita)
    
    expect(wrapper.find('svg path').exists()).toBe(true)
  })

  it('has Qiita-specific path data', () => {
    const wrapper = mount(IconQiita)
    const path = wrapper.find('svg path')
    
    expect(path.attributes('d')).toContain('M12 0C5.373 0 0 5.373')
  })
})