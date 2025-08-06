<template>
  <aside class="sidebar">
    <div class="sidebar-content" :class="{ 'visible': isVisible }">
      <h1 class="section-title">GET IN TOUCH</h1>
      <div class="contact-info">
        <ContactInfo />
      </div>
      
      <h2 class="section-title connect-title">CONNECT</h2>
      <div class="social-section">
        <SocialButton
          v-for="social in socials"
          :key="social.platform"
          :platform="social.platform"
          :url="social.url"
          :icon="social.icon"
        />
      </div>
    </div>
    
    <!-- Social icons on extreme left -->
    <div class="social-icons-vertical">
      <a 
        v-for="social in socials" 
        :key="social.platform"
        :href="social.url" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-link"
        :aria-label="social.platform"
      >
        <component :is="social.icon" fill="currentColor" stroke-width="0" />
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'
import ContactInfo from '@/components/ContactInfo.vue'
import SocialButton from '@/components/SocialButton.vue'
import type { Component } from 'vue'

interface Social {
  platform: string
  url: string
  icon: Component
}

const socials: Social[] = [
  { platform: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
]

const isVisible = ref(false)

onMounted(() => {
  // Trigger fade-in animation after mount
  requestAnimationFrame(() => {
    isVisible.value = true
  })
})
</script>

<style scoped>
.sidebar {
  position: relative;
  width: 60%;
  padding: 4rem 1rem 4rem 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  max-height: 100vh;
  scrollbar-gutter: stable;
  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Layout animation - start with home size when animating */
.sidebar.layout-animate {
  width: 55%;
}

/* Animate to non-home size when mounted */
.sidebar.layout-animate.layout-mounted {
  width: 60%;
}

.sidebar-content {
  width: 100%;
  padding: 4rem 4rem 4rem 6rem;
  opacity: 0;
  transition: opacity 0.8s ease-out;
}

.sidebar-content.visible {
  opacity: 1;
}

.section-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.connect-title {
  margin-top: 3rem;
}

.contact-info {
  margin-bottom: 2rem;
}

.social-section {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.social-icons-vertical {
  position: absolute;
  left: 4rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.social-icons-vertical::before,
.social-icons-vertical::after {
  content: '';
  width: 1px;
  height: 6rem;
  background-color: var(--border-color);
}

.social-icons-vertical::before {
  margin-bottom: 1rem;
}

.social-icons-vertical::after {
  margin-top: 1rem;
}

.social-link {
  color: var(--text-color);
  transition: color 0.2s ease;
}

.social-link:hover {
  color: var(--text-tertiary);
}

.social-link svg {
  width: 24px;
  height: 24px;
}

/* Hide scrollbar completely */
.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (max-width: 1200px) {
  .sidebar,
  .sidebar.layout-animate,
  .sidebar.layout-animate.layout-mounted {
    width: 100%;
    padding: 3rem 2rem;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    max-height: 100vh;
  }

  .sidebar::-webkit-scrollbar {
    display: none;
  }

  .sidebar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .sidebar-content {
    margin-top: 0;
    text-align: center;
    padding: 0 1rem 2rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .social-icons-vertical {
    display: none;
  }

  .section-title {
    font-size: 1rem;
  }

  .connect-title {
    margin-top: 0.5rem;
  }

  .social-section {
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
}
</style>