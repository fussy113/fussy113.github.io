<template>
  <nav class="navbar is-primary">
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          About
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
      items: [
        { title: 'Home', icon: 'home', url: '/' },
        { title: 'Feature', icon: 'code', url: '/feature' },
        { title: 'Contact', icon: 'question_answer', url: '/contact' }
      ]
    }
  }
})
</script>
