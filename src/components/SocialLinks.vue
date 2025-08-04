<template>
  <div class="flex space-x-4">
    <a
      v-for="link in socialLinks"
      :key="link.platform"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      :aria-label="`Visit my ${link.platform} profile`"
    >
      <component :is="link.icon" class="w-5 h-5" fill="currentColor" stroke-width="0" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
import type { Component } from 'vue'

interface SocialLink {
  platform: string
  url: string
  icon: Component
}

const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/frank-chris', icon: Github },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/chrisfrancis09', icon: Linkedin }
]
</script>