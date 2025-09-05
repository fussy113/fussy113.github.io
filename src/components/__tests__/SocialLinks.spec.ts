import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialLinks from '../SocialLinks.vue'

describe('SocialLinks', () => {
  it('renders properly', () => {
    const wrapper = mount(SocialLinks)
    
    expect(wrapper.find('.social-links').exists()).toBe(true)
  })

  it('displays section title', () => {
    const wrapper = mount(SocialLinks)
    
    expect(wrapper.find('.section-title').text()).toBe('Links')
  })

  it('displays all social links', () => {
    const wrapper = mount(SocialLinks)
    const links = wrapper.findAll('.social-link')
    
    expect(links).toHaveLength(4)
  })

  it('displays GitHub link correctly', () => {
    const wrapper = mount(SocialLinks)
    const githubLink = wrapper.findAll('.social-link').find(link => 
      link.find('.link-name').text() === 'GitHub'
    )
    
    expect(githubLink?.exists()).toBe(true)
    expect(githubLink?.attributes('href')).toBe('https://github.com/fussy113')
    expect(githubLink?.attributes('target')).toBe('_blank')
    expect(githubLink?.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Qiita link correctly', () => {
    const wrapper = mount(SocialLinks)
    const qiitaLink = wrapper.findAll('.social-link').find(link => 
      link.find('.link-name').text() === 'Qiita'
    )
    
    expect(qiitaLink?.exists()).toBe(true)
    expect(qiitaLink?.attributes('href')).toBe('https://qiita.com/fussy113')
    expect(qiitaLink?.attributes('target')).toBe('_blank')
    expect(qiitaLink?.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Zenn link correctly', () => {
    const wrapper = mount(SocialLinks)
    const zennLink = wrapper.findAll('.social-link').find(link => 
      link.find('.link-name').text() === 'Zenn'
    )
    
    expect(zennLink?.exists()).toBe(true)
    expect(zennLink?.attributes('href')).toBe('https://zenn.dev/fussy113')
    expect(zennLink?.attributes('target')).toBe('_blank')
    expect(zennLink?.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Lapras link correctly', () => {
    const wrapper = mount(SocialLinks)
    const laprasLink = wrapper.findAll('.social-link').find(link => 
      link.find('.link-name').text() === 'Lapras'
    )
    
    expect(laprasLink?.exists()).toBe(true)
    expect(laprasLink?.attributes('href')).toBe('https://lapras.com/public/TJBGDRB')
    expect(laprasLink?.attributes('target')).toBe('_blank')
    expect(laprasLink?.attributes('rel')).toBe('noopener noreferrer')
  })

  it('has proper grid structure', () => {
    const wrapper = mount(SocialLinks)
    
    expect(wrapper.find('.links-grid').exists()).toBe(true)
    
    const linkIcons = wrapper.findAll('.link-icon')
    expect(linkIcons).toHaveLength(4)
    
    const linkContents = wrapper.findAll('.link-content')
    expect(linkContents).toHaveLength(4)
  })

  it('displays icons for each link', () => {
    const wrapper = mount(SocialLinks)
    const linkIcons = wrapper.findAll('.link-icon')
    
    linkIcons.forEach(icon => {
      expect(icon.find('svg').exists()).toBe(true)
    })
  })
})