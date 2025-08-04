<template>
  <aside class="sidebar">
    <div class="sidebar-content" :class="{ 'visible': isVisible }">
      <h1 class="name">{{ name }}</h1>
      <p class="role">{{ role }}</p>
      <p class="location">{{ location }}</p>
    </div>
    
    <!-- Social icons on extreme left -->
    <div class="social-icons-vertical">
      <a 
        v-for="social in socials" 
        :key="social.name"
        :href="social.url" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="social-link"
        :aria-label="social.name"
      >
        <component :is="social.icon" fill="currentColor" stroke-width="0" />
      </a>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Linkedin } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Props {
  name?: string
  role?: string
  location?: string
  socials?: Array<{
    name: string
    url: string
    icon: Component
  }>
}

withDefaults(defineProps<Props>(), {
  name: 'Chris Francis',
  role: 'Data // Machine Learning',
  location: 'San Diego, CA',
  socials: () => [
    { name: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
  ]
})

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
  width: 55%;
  padding: 4rem 1rem 4rem 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Layout animation - start with non-home size when animating */
.sidebar.layout-animate {
  width: 60%;
}

/* Animate to home size when mounted */
.sidebar.layout-animate.layout-mounted {
  width: 55%;
}

.sidebar-content {
  width: 100%;
  padding: 4rem 4rem 4rem 6rem;
  margin-top: 40vh;
  opacity: 0;
  transition: opacity 0.8s ease-out;
}

.sidebar-content.visible {
  opacity: 1;
}

.name {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.role {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

.location {
  font-family: 'Inter', sans-serif;
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--text-tertiary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
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

@media (max-width: 1200px) {
  .sidebar,
  .sidebar.layout-animate,
  .sidebar.layout-animate.layout-mounted {
    width: 100%;
    padding: 3rem 2rem;
    justify-content: center;
    align-items: center;
  }

  .sidebar-content {
    margin-top: 0;
    text-align: center;
    padding: 2rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .social-icons-vertical {
    display: none;
  }

  .name {
    font-size: 0.8rem;
  }

  .role, .location {
    font-size: 0.875rem;
  }
}
</style>