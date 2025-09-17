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
    const socialLinks = wrapper.findAll('.social-link')

    // First social link should be GitHub based on the component
    expect(socialLinks.length).toBeGreaterThan(0)
    const githubLink = socialLinks[0]!

    expect(githubLink.exists()).toBe(true)
    expect(githubLink.attributes('href')).toBe('https://github.com/fussy113')
    expect(githubLink.attributes('target')).toBe('_blank')
    expect(githubLink.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Qiita link correctly', () => {
    const wrapper = mount(SocialLinks)
    const socialLinks = wrapper.findAll('.social-link')

    // Second social link should be Qiita based on the component
    expect(socialLinks.length).toBeGreaterThan(1)
    const qiitaLink = socialLinks[1]!

    expect(qiitaLink.exists()).toBe(true)
    expect(qiitaLink.attributes('href')).toBe('https://qiita.com/fussy113')
    expect(qiitaLink.attributes('target')).toBe('_blank')
    expect(qiitaLink.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Zenn link correctly', () => {
    const wrapper = mount(SocialLinks)
    const socialLinks = wrapper.findAll('.social-link')

    // Third social link should be Zenn based on the component
    expect(socialLinks.length).toBeGreaterThan(2)
    const zennLink = socialLinks[2]!

    expect(zennLink.exists()).toBe(true)
    expect(zennLink.attributes('href')).toBe('https://zenn.dev/fussy113')
    expect(zennLink.attributes('target')).toBe('_blank')
    expect(zennLink.attributes('rel')).toBe('noopener noreferrer')
  })

  it('displays Lapras link correctly', () => {
    const wrapper = mount(SocialLinks)
    const socialLinks = wrapper.findAll('.social-link')

    // Fourth social link should be Lapras based on the component
    expect(socialLinks.length).toBeGreaterThan(3)
    const laprasLink = socialLinks[3]!

    expect(laprasLink.exists()).toBe(true)
    expect(laprasLink.attributes('href')).toBe('https://lapras.com/public/TJBGDRB')
    expect(laprasLink.attributes('target')).toBe('_blank')
    expect(laprasLink.attributes('rel')).toBe('noopener noreferrer')
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

    linkIcons.forEach((icon, index) => {
      // Use DOM element check for more reliable testing
      expect(icon.element.children.length).toBeGreaterThan(0)
      const firstChild = icon.element.children[0]
      expect(firstChild).toBeDefined()
      if (firstChild) {
        expect(firstChild.tagName.toLowerCase()).toBe('svg')
      }
    })
  })
})