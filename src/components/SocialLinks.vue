<script setup lang="ts">
import IconGitHub from './icons/IconGitHub.vue'
import IconQiita from './icons/IconQiita.vue'
import IconZenn from './icons/IconZenn.vue'
import IconLapras from './icons/IconLapras.vue'

interface SocialLink {
  name: string
  url: string
  icon: any
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/fussy113',
    icon: IconGitHub,
  },
  {
    name: 'Qiita',
    url: 'https://qiita.com/fussy113',
    icon: IconQiita,
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/fussy113',
    icon: IconZenn,
  },
  {
    name: 'Lapras',
    url: 'https://lapras.com/public/TJBGDRB',
    icon: IconLapras,
  },
]
</script>

<template>
  <div class="social-links">
    <h2 class="section-title">Links</h2>
    <div class="links-grid">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <div class="link-icon">
          <component :is="link.icon" />
        </div>
        <div class="link-content">
          <h3 class="link-name">{{ link.name }}</h3>
        </div>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-links {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-heading);
  text-align: center;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-background);
    border-color: var(--color-border-hover);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
}

.link-icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-right: 1rem;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
}

.link-content {
  flex: 1;
}

.link-name {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-heading);
}

@media (max-width: 640px) {
  .links-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }

  .social-link {
    padding: 1rem;
  }

  .link-icon {
    width: 40px;
    height: 40px;
    margin-right: 0.75rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .section-title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
}
</style>
