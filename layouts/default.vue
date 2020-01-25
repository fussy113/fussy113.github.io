<template>
  <div>
    <the-navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
export default Vue.extend({
  components: {
    TheNavbar
  }
})
</script>
