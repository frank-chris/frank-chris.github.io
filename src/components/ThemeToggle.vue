<template>
  <button
    @click="toggleTheme"
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
  >
    <Sun v-if="isDark" class="w-5 h-5 text-yellow-500" />
    <Moon v-else class="w-5 h-5 text-gray-700" />
  </button>
</template>

<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>