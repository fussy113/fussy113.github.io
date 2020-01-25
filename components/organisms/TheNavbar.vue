<template>
  <nav class="navbar is-primary">
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link
          v-for="(link, index) in linkItems"
          :key="index + 1"
          :to="link.url"
          :class="[$route.path === link.url ? 'is-active' : '']"
          class="navbar-item">
          {{ link.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      linkItems: [
        { title: 'Home', icon: 'home', url: '/' },
        { title: 'About', icon: 'code', url: '/about' }
      ]
    }
  }
})
</script>
