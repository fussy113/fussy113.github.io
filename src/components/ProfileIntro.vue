<script setup lang="ts">
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <div class="profile-intro">
    <!-- Profile Header Section -->
    <section class="profile-header">
      <div class="profile-content">
        <div class="profile-avatar">
          <div class="avatar-placeholder">
            <span class="avatar-text">fussy113</span>
          </div>
        </div>

        <div class="profile-info">
          <h1 class="profile-name">fussy113</h1>
          <p class="profile-title">Software Engineer</p>
          <p class="profile-description">
            プログラミングと技術への情熱を持つソフトウェアエンジニアです。<br>
            新しい技術を学び、共有することを楽しんでいます。
          </p>
        </div>
      </div>
    </section>

    <!-- Social Links Section -->
    <section class="social-section">
      <SocialLinks />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.profile-intro {
  max-width: 1200px;
  padding: 2rem 1rem;
  margin: 0 auto;
}

.profile-header {
  margin-bottom: 4rem;
  text-align: center;
}

.profile-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.profile-avatar {
  position: relative;
}

.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-background-soft) 0%, var(--color-background-mute) 100%);
  border: 3px solid var(--color-border);
  border-radius: 50%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.avatar-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: 0.5px;
}

.profile-info {
  text-align: center;
}

.profile-name {
  margin: 0 0 0.5rem 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.5px;
}

.profile-title {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: hsla(160, 100%, 37%, 1);
}

.profile-description {
  max-width: 500px;
  margin: 0 auto;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
}

.social-section {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

@media (min-width: 768px) {
  .profile-content {
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }

  .profile-info {
    text-align: left;
  }

  .avatar-placeholder {
    width: 140px;
    height: 140px;
  }
}

@media (max-width: 640px) {
  .profile-intro {
    padding: 1rem 0.5rem;
  }

  .profile-header {
    margin-bottom: 3rem;
  }

  .profile-name {
    font-size: 2rem;
  }

  .avatar-placeholder {
    width: 100px;
    height: 100px;
  }

  .avatar-text {
    font-size: 0.8rem;
  }
}
</style>
