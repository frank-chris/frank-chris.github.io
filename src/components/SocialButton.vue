<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 group"
    :aria-label="`Connect on ${platform}`"
  >
    <component
      :is="icon"
      class="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      fill="currentColor"
      stroke-width="0"
    />
    <span class="font-medium text-gray-700 dark:text-gray-300">
      {{ platform }}
    </span>
  </a>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  platform: string
  url: string
  icon: Component
}

defineProps<Props>()
</script>